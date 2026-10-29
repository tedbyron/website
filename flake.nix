{
  inputs = {
    nixpkgs.url = "nixpkgs/nixpkgs-unstable";
    flake-utils.url = "flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
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
      in
      with pkgs;
      {
        formatter = nixfmt;

        devShells.default = mkShellNoCC {
          packages = [ pkgs."nodejs_${nodeMajor}" ];
        };
      }
    );
}
