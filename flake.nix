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
