---
title: Kind of maybe useful zsh stuff
description: Some zsh things I've picked up on
date: 2025-05-05T23:00:00-04:00
tags:
  - zsh
published: true
---

- **Alternate forms**

  `man zshmisc(1)` § Alternate forms for complex commands

  It's both easier and faster to write scripts with alternate forms of builtin
  constructs than using their `sh` equivalents, but you do have to be aware of
  the listed limitations

  ```shell
  foo() echo $@

  for arg in $@
    if [[ $arg =~ search ]] {
      foo bar
    } else {
      foo baz
    }
  ```

- **Don't need the double quotes**

  `man zshoptions(1)` § Shell emulation

  Zsh doesn't perform field splitting on unquoted parameter expansions, unless
  you have `SH_WORD_SPLIT` set for some reason

  ```shell
  a='some path/with spaces/'
  cd $a
  ```

- **`MULTIOS` option**

  `man zshoptions(1)` § Scripts and functions

  On by default, performs implicit `tee`s or `cats` when multiple redirections
  are attempted

  ```shell
  # tee: writes the date to two files
  date >foo >bar

  # cat: same as `cat foo bar | sort`
  sort <foo <bar
  ```

- **`AUTO_CD` option**

  `man zshoptions(1)` § Changing directories

  If a command isn't a command, and the command is the name of a dir, tries to
  `cd` to that dir

  ```shell-session
  $ setopt autocd
  $ ls
  foo  bar
  $ foo # or foo/
  $ pwd
  …/foo
  ```

- **`print`**

  `man zshbuiltins(1)`

  Zsh's `print` builtin has `-c` and `-C` options to print in columns, which can
  be useful when a system doesn't have util-linux's `column` installed

  There's also an `-l` option to print arguments separated by newline, useful
  for arrays

  ```shell-session
  $ print -l $path
  /home/ted/git/website/.direnv/bin
  /home/ted/git/website/node_modules/.bin
  /run/wrappers/bin
  …
  ```

- **`r`**

  `man zshbuiltins(1)`

  The `r` builtin runs the previous command again, and is equivalent to `fc -s`
  and `fc -e -`

- **`whence`, `where`, `which`**

  `man zshbuiltins(1)`

  `which` prints in `csh`-like format (`whence -c`), `where` does the same and
  lists all paths (`whence -ca`)

- **Global aliases**

  Alias anywhere in the command line

  ```shell
  # adds highlighting to any command run with `-h` or `--help`
  alias -g -- -h='-h |& bat --plain --language help'
  alias -g -- --help='--help |& bat --plain --language help'
  ```

- **Dir hash table**

  `man zshbuiltins(1)`

  `hash -d` can list or add to the named directory hash table

  ```shell-session
  $ hash -d foo=$HOME/some/long/path
  $ cd ~foo
  $ pwd
  /home/ted/some/long/path
  ```
