---
title: Kinda maybe useful zsh stuff
date: 2025-05-05T23:00:00-04:00
tags:
  - zsh
published: true
---

## Alternate forms

- It's both easier and faster to write scripts with alternate forms of builtin
  constructs than using their `sh` equivalents, but you do have to be aware of
  the limitations listed in the docs

  ```shell
  foo() echo $@
  for arg in $@
      if [[ $arg =~ pattern ]] {
          foo bar
      } else {
          foo baz
      }
  ```

- `man zshmisc(1)` § Alternate forms for complex commands

## Don't need the double quotes

- Zsh doesn't perform field splitting on unquoted parameter expansions, unless
  you have `SH_WORD_SPLIT` set for some reason

  ```shell-session
  $ a='some path/with spaces/'
  $ cd $a
  ```

- `man zshoptions(1)` § Shell emulation

## `MULTIOS` option

- On by default, performs implicit `tee`s or `cats` when multiple redirections
  are attempted

  ```shell-session
  $ date >foo >bar # writes the date to both files like tee

  $ sort <foo <bar # same as `cat foo bar | sort`
  ```

- `man zshoptions(1)` § Scripts and functions

## `AUTO_CD` option

- If a command isn't a command, and the command is the name of a dir, tries to
  `cd` to that dir

  ```shell-session
  $ setopt autocd
  $ ls
  foo  bar
  $ foo # or foo/, ./foo, etc.
  $ pwd
  …/foo
  ```

- `man zshoptions(1)` § Changing directories

## `print`

- Zsh's `print` builtin has `-c` and `-C` options to print in columns, which can
  be useful when a system doesn't have util-linux's `column` installed
- There's also an `-l` option to print arguments separated by newline, useful
  for arrays

  ```shell-session
  $ print -l $path
  /home/ted/git/website/.direnv/bin
  /home/ted/git/website/node_modules/.bin
  /run/wrappers/bin
  …
  ```

- `man zshbuiltins(1)`

## `r`

- The `r` builtin runs the previous command again, and is equivalent to `fc -s`
  and `fc -e -`
- `man zshbuiltins(1)`

## `whence`, `where`, `which`

- `which` does what you expect and prints in `csh`-like format (`whence -c`),
  `where` does the same but also lists all paths (`whence -ca`)
- `man zshbuiltins(1)`

## Global aliases

- Alias anywhere in the command line

  ```shell
  # adds highlighting to any command run with `-h` or `--help`
  alias -g -- -h='-h |& bat --plain --language help'
  alias -g -- --help='--help |& bat --plain --language help'
  ```

- `man zshbuiltins(1)`

## Dir hash table

- `hash -d` can list or add to the named directory hash table

  ```shell-session
  $ hash -d foo=$HOME/some/long/path
  $ cd ~foo
  $ pwd
  /home/ted/some/long/path
  ```

- `man zshbuiltins(1)`
