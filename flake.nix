{
  description = "tedbyron's website";

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      with pkgs;
      {
        formatter = nixfmt-rfc-style;

        devShells.default = mkShellNoCC {
          packages = [
            nodejs_22
          ];
        };
      }
    );
}
