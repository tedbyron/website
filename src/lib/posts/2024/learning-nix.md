---
title: Learning nix
description: Beginner thoughts on nix
date: 2024-04-14T18:00:00-04:00
tags:
  - nix
published: true
---

## asdfghjkl

### asdfghjkl

#### asdfghjkl

##### asdfghjkl

###### asdfghjkl

[asdfghjkl](https://github.com/tedbyron)

> blockquote

**bold** _italic_ **_bolditalic_** ~~strikethrough~~

Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render.

- 1
- 2
- 3

1. 1
1. 2
1. 3

|  a  |  b  |  c  |
| :-: | :-: | :-: |
|  d  |  e  |  f  |

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et `dolore` magna aliqua. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Sagittis eu
volutpat odio facilisis mauris sit amet massa. Ut eu sem integer vitae justo eget magna fermentum
iaculis. Facilisis sed odio morbi quis commodo odio. Quis eleifend quam adipiscing vitae. Sagittis
orci a scelerisque purus semper eget duis at. Amet commodo nulla facilisi nullam vehicula ipsum a
arcu. Fames ac turpis egestas integer eget aliquet nibh praesent. Dolor magna eget est lorem. Vitae
ultricies leo integer malesuada nunc vel.

Aliquet sagittis id consectetur purus. Pulvinar neque laoreet suspendisse interdum consectetur.
Varius duis at consectetur lorem donec massa. Pellentesque habitant morbi tristique senectus et.
Nisi lacus sed viverra tellus in hac habitasse platea. Phasellus egestas tellus rutrum tellus
pellentesque eu tincidunt tortor. Nisl pretium fusce id velit ut tortor pretium viverra. Amet
commodo nulla facilisi nullam vehicula ipsum a. Sem fringilla ut morbi tincidunt augue interdum.
Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Leo urna molestie at elementum eu
facilisis sed odio. Tempor nec feugiat nisl pretium fusce id. Rutrum tellus pellentesque eu
tincidunt tortor aliquam nulla facilisi.

Sit amet porttitor eget dolor morbi non arcu risus quis. Ut consequat semper viverra nam libero
justo laoreet sit. At imperdiet dui accumsan sit amet. Sapien pellentesque habitant morbi tristique
senectus et netus. Bibendum arcu vitae elementum curabitur vitae. Diam quis enim lobortis
scelerisque fermentum. Elementum tempus egestas sed sed risus pretium quam. Urna et pharetra
pharetra massa massa ultricies mi quis hendrerit. Massa placerat duis ultricies lacus sed turpis.
Vitae tempus quam pellentesque nec.

Pellentesque elit ullamcorper dignissim cras. Nibh sed pulvinar proin gravida hendrerit lectus.
Congue eu consequat ac felis donec et odio pellentesque. Ac tincidunt vitae semper quis lectus.
Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Aliquet enim tortor at
auctor. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Volutpat blandit
aliquam etiam erat velit scelerisque in. Blandit volutpat maecenas volutpat blandit aliquam etiam
erat velit scelerisque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.
Tristique nulla aliquet enim tortor at auctor.

Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Ultricies integer quis
auctor elit sed vulputate. Dolor purus non enim praesent. Bibendum arcu vitae elementum curabitur
vitae nunc. Pellentesque massa placerat duis ultricies lacus sed turpis. Euismod lacinia at quis
risus sed vulputate odio ut. Faucibus interdum posuere lorem ipsum dolor. Lectus sit amet est
placerat in egestas erat. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
Pretium fusce id velit ut tortor. Vestibulum lectus mauris ultrices eros in cursus turpis massa
tincidunt. Condimentum lacinia quis vel eros donec ac odio tempor orci. Et netus et malesuada
fames. Cursus euismod quis viverra nibh cras. Nisl tincidunt eget nullam non nisi.

```nix
{
  description = "tedbyron's website";

  outputs = { nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        formatter = pkgs.nixfmt;

        devShells.default =
          pkgs.mkShellNoCC { packages = with pkgs; [ nodejs_20 ]; };
      });
}
```
