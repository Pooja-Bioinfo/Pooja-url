
# SBML.jl — load systems biology models from SBML files

This package provides a straightforward way to load model- and
simulation-relevant information from SBML files.

The representation does not follow the XML structure within SBML, but instead
translates the contents into native Julia structs. This makes the models much
easier to work with from Julia,

## Quick-start

The "main" function of the library is [`readSBML`](@ref), which does exactly
what it says: loads a SBML model from disk into the [`SBML.Model`](@ref):

```julia
julia> using SBML
julia> mdl = readSBML("Ec_core_flux1.xml")
SBML.Model(…)

julia> mdl.compartments
2-element Array{String,1}:
 "Extra_organism"
 "Cytosol"
```

There are several functions that help you with using the data in the usual
COBRA-style workflows, such as [`stoichiometry_matrix`](@ref). Others are
detailed in the relevant sections of the [function reference](functions.md).

```julia
julia> metabolites, reactions, S = stoichiometry_matrix(mdl)
julia> metabolites
77-element Array{String,1}:
 "M_succoa_c"
 "M_ac_c"
 "M_etoh_c"
  ⋮

julia> S
77×77 SparseArrays.SparseMatrixCSC{Float64,Int64} with 308 stored entries:
  [60,  1]  =  -1.0
  [68,  1]  =  1.0
  [1 ,  2]  =  1.0
  [6 ,  2]  =  -1.0
  ⋮
  [23, 76]  =  1.0
  [56, 76]  =  -1.0
  [30, 77]  =  -1.0
  [48, 77]  =  1.0

julia> Matrix(S)
77×77 Array{Float64,2}:
 0.0   1.0  0.0  0.0  0.0  0.0  0.0  …  0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  1.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0  -1.0  0.0  0.0  0.0  0.0  0.0  …  0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  1.0  -1.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0
 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0  -1.0  0.0   0.0  0.0  0.0  0.0
 ⋮                         ⋮         ⋱  ⋮                          ⋮
```

## Table of contents

```@contents
Pages = ["functions.md"]
Depth = 2
```
