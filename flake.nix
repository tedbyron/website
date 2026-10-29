{
  inputs = {
    nixpkgs.url = "nixpkgs/nixpkgs-unstable";
    flake-utils.url = "flake-utils";
    curlio = {
      url = "github:tedbyron/dotfiles?dir=flakes/curlio";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-utils.follows = "flake-utils";
    };
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      curlio,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodeMajor =
          ./.node-version
          |> builtins.readFile
          |> pkgs.lib.trim
          |> pkgs.lib.removePrefix "v"
          |> pkgs.lib.versions.major;
        curlioFonts = curlio.packages.${system}.all-web-latin;
      in
      with pkgs;
      {
        formatter = nixfmt;

        # Replace the Curlio WOFF2s and their @font-face CSS with the curlio flake's.
        apps.update-fonts = flake-utils.lib.mkApp {
          drv = writeShellApplication {
            name = "update-fonts";
            runtimeInputs = [
              coreutils
              git
              pkgs."nodejs_${nodeMajor}"
            ];
            text = ''
              assets="$(git rev-parse --show-toplevel)/src/lib/assets"
              rm -f "$assets"/fonts/*.woff2
              install -m644 ${curlioFonts}/share/fonts/woff2/*.woff2 "$assets/fonts"
              sed "s#url('./#url('../fonts/#" \
                ${curlioFonts}/share/fonts/woff2/curlio.css > "$assets/css/curlio.css"
              npx --no-install prettier --write "$assets/css/curlio.css"
            '';
          };
        };

        devShells.default = mkShellNoCC {
          packages = [ pkgs."nodejs_${nodeMajor}" ];
        };
      }
    );
}
