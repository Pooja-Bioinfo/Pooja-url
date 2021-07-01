var documenterSearchIndex = {"docs":
[{"location":"#SBML.jl-—-load-systems-biology-models-from-SBML-files","page":"Documentation","title":"SBML.jl — load systems biology models from SBML files","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"This package provides a straightforward way to load model- and simulation-relevant information from SBML files.","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"The library provides a single function readSBML to load a SBML.Model:","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"julia> using SBML\njulia> mdl = readSBML(\"Ec_core_flux1.xml\")\nSBML.Model(…)\n\njulia> mdl.compartments\n2-element Array{String,1}:\n \"Extra_organism\"\n \"Cytosol\"","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"There are several functions to help you with using the data in the usual COBRA-style workflows, such as getS:","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"julia> metabolites, reactions, S = getS(mdl)\njulia> metabolites\n77-element Array{String,1}:\n \"M_succoa_c\"\n \"M_ac_c\"\n \"M_etoh_c\"\n  ⋮\n\njulia> S\n77×77 SparseArrays.SparseMatrixCSC{Float64,Int64} with 308 stored entries:\n  [60,  1]  =  -1.0\n  [68,  1]  =  1.0\n  [1 ,  2]  =  1.0\n  [6 ,  2]  =  -1.0\n  ⋮\n  [23, 76]  =  1.0\n  [56, 76]  =  -1.0\n  [30, 77]  =  -1.0\n  [48, 77]  =  1.0\n\njulia> Matrix(S)\n77×77 Array{Float64,2}:\n 0.0   1.0  0.0  0.0  0.0  0.0  0.0  …  0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  1.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0  -1.0  0.0  0.0  0.0  0.0  0.0  …  0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  1.0  -1.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0   0.0  0.0   0.0  0.0  0.0  0.0\n 0.0   0.0  0.0  0.0  0.0  0.0  0.0     0.0  -1.0  0.0   0.0  0.0  0.0  0.0\n ⋮                         ⋮         ⋱  ⋮                          ⋮    ","category":"page"},{"location":"#Function-reference","page":"Documentation","title":"Function reference","text":"","category":"section"},{"location":"#Data-structures","page":"Documentation","title":"Data structures","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"structs.jl\"]","category":"page"},{"location":"#SBML.Maybe","page":"Documentation","title":"SBML.Maybe","text":"Maybe{X}\n\nType shortcut for \"X or nothing\" or \"nullable X\" in javaspeak. Name got inspired by our functional friends.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.Compartment","page":"Documentation","title":"SBML.Compartment","text":"SBML Compartment with sizing information.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.FunctionDefinition","page":"Documentation","title":"SBML.FunctionDefinition","text":"Custom function definition.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.GPAAnd","page":"Documentation","title":"SBML.GPAAnd","text":"Boolean binary \"and\" in the association expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.GPAOr","page":"Documentation","title":"SBML.GPAOr","text":"Boolean binary \"or\" in the association expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.GPARef","page":"Documentation","title":"SBML.GPARef","text":"Gene product reference in the association expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.GeneProduct","page":"Documentation","title":"SBML.GeneProduct","text":"Gene product metadata.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.GeneProductAssociation","page":"Documentation","title":"SBML.GeneProductAssociation","text":"Abstract type for all kinds of gene product associations\n\n\n\n\n\n","category":"type"},{"location":"#SBML.Math","page":"Documentation","title":"SBML.Math","text":"A simplified representation of MathML-specified math AST\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathApply","page":"Documentation","title":"SBML.MathApply","text":"Function application (\"call by name\", no tricks allowed) in mathematical expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathConst","page":"Documentation","title":"SBML.MathConst","text":"A constant identified by name (usually something like pi, e or true) in mathematical expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathIdent","page":"Documentation","title":"SBML.MathIdent","text":"An identifier (usually a variable name) in mathematical expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathLambda","page":"Documentation","title":"SBML.MathLambda","text":"Function definition (aka \"lambda\") in mathematical expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathTime","page":"Documentation","title":"SBML.MathTime","text":"A special value representing the current time of the simulation, with a special name.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.MathVal","page":"Documentation","title":"SBML.MathVal","text":"A literal value (usually a numeric constant) in mathematical expression\n\n\n\n\n\n","category":"type"},{"location":"#SBML.Model","page":"Documentation","title":"SBML.Model","text":"Structure that collects the model-related data. Contains parameters, units, compartments, species and reactions and gene_products, and additional notes and annotation (also present internally in some of the data fields). The contained dictionaries are indexed by identifiers of the corresponding objects.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.Reaction","page":"Documentation","title":"SBML.Reaction","text":"Reaction with stoichiometry that assigns reactants and products their relative consumption/production rates (accessible in field stoichiometry), lower/upper bounds (in tuples lb and ub, with unit names), and objective coefficient (oc). Also may contains notes and annotation.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.Species","page":"Documentation","title":"SBML.Species","text":"Species metadata – contains a human-readable name, a compartment identifier, formula, charge, and additional notes and annotation.\n\n\n\n\n\n","category":"type"},{"location":"#SBML.UnitPart","page":"Documentation","title":"SBML.UnitPart","text":"Part of a measurement unit definition that corresponds to the SBML definition of Unit. For example, the unit \"per square megahour\", Mh^(-2), is written as:\n\nSBML.UnitPart(\"second\",  # base SI unit, this says we are measuring time\n         -2,        # exponent, says \"per square\"\n         6,         # log-10 scale of the unit, says \"mega\"\n         1/3600)    # second-to-hour multiplier\n\nCompound units (such as \"volt-amperes\" and \"dozens of yards per ounce\") are built from multiple UnitParts; see the definition of field units in SBML.Model.\n\n\n\n\n\n","category":"type"},{"location":"#Base-functions","page":"Documentation","title":"Base functions","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"version.jl\", \"readsbml.jl\"]","category":"page"},{"location":"#SBML.SBMLVersion-Tuple{}","page":"Documentation","title":"SBML.SBMLVersion","text":"function SBMLVersion()\n\nGet the version of the used SBML library in Julia version format.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.extractModel-Tuple{Ptr{Nothing}}","page":"Documentation","title":"SBML.extractModel","text":"\"     function extractModel(mdl::VPtr)::SBML.Model\n\nTake the SBMLModel_t pointer and extract all information required to make a valid SBML.Model structure.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.getAssociation-Tuple{Ptr{Nothing}}","page":"Documentation","title":"SBML.getAssociation","text":"function getAssociation(x::VPtr)::GeneProductAssociation\n\nConvert a pointer to SBML FbcAssociation_t to the GeneProductAssociation tree structure.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.get_optional_bool-Tuple{Ptr{Nothing},Any,Any}","page":"Documentation","title":"SBML.get_optional_bool","text":"get_optional_bool(x::VPtr, is_sym, get_sym)::Maybe{Bool}\n\nHelper for getting out boolean flags.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.get_optional_double-Tuple{Ptr{Nothing},Any,Any}","page":"Documentation","title":"SBML.get_optional_double","text":"get_optional_double(x::VPtr, is_sym, get_sym)::Maybe{Float64}\n\nHelper for getting out C doubles aka Float64s.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.get_optional_int-Tuple{Ptr{Nothing},Any,Any}","page":"Documentation","title":"SBML.get_optional_int","text":"get_optional_int(x::VPtr, is_sym, get_sym)::Maybe{UInt}\n\nHelper for getting out unsigned integers.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.get_optional_string-Tuple{Ptr{Nothing},Any}","page":"Documentation","title":"SBML.get_optional_string","text":"get_optional_string(x::VPtr, fn_sym)::Maybe{String}\n\nLike get_string, but returns nothing instead of throwing an exception.\n\nThis is used to get notes and annotations and several other things (see get_notes, get_annotations)\n\n\n\n\n\n","category":"method"},{"location":"#SBML.get_string-Tuple{Ptr{Nothing},Any}","page":"Documentation","title":"SBML.get_string","text":"get_string(x::VPtr, fn_sym)::Maybe{String}\n\nC-call the SBML function fn_sym with a single parameter x, interpret the result as a string and return it, or throw exception in case the pointer is NULL.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.readSBML","page":"Documentation","title":"SBML.readSBML","text":"function readSBML(fn::String, sbml_conversion = model->nothing)::SBML.Model\n\nRead the SBML from a XML file in fn and return the contained SBML.Model.\n\nThe sbml_conversion is a function that does an in-place modification of the single parameter, which is the C pointer to the loaded SBML document (C type SBMLDocument*). Several functions for doing that are prepared, including set_level_and_version, libsbml_convert, and convert_simplify_math.\n\nExample\n\nm = readSBML(\"my_model.xml\", doc -> begin\n    set_level_and_version(3, 1)(doc)\n    convert_simplify_math(doc)\nend)\n\n\n\n\n\n","category":"function"},{"location":"#libsbml-representation-converters","page":"Documentation","title":"libsbml representation converters","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"The converters are intended to be used as parameters of readSBML.","category":"page"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"converters.jl\"]","category":"page"},{"location":"#SBML.convert_simplify_math","page":"Documentation","title":"SBML.convert_simplify_math","text":"convert_simplify_math\n\nShortcut for libsbml_convert that expands functions, local parameters, and initial assignments in the SBML document.\n\n\n\n\n\n","category":"function"},{"location":"#SBML.libsbml_convert-Tuple{AbstractArray{var\"#s50\",1} where var\"#s50\"<:(Pair{String,var\"#s49\"} where var\"#s49\"<:AbstractDict{String,String})}","page":"Documentation","title":"SBML.libsbml_convert","text":"libsbml_convert(conversion_options::Vector{Pair{String, Dict{String, String}}})\n\nA converter that runs the SBML conversion routine, with specified conversion options. The argument is a vector of pairs to allow specifying the order of conversions.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.libsbml_convert-Tuple{String}","page":"Documentation","title":"SBML.libsbml_convert","text":"libsbml_convert(converter::String; kwargs...)\n\nQuickly construct a single run of a libsbml converter from keyword arguments.\n\nExample\n\nreadSBML(\"example.xml\", libsbml_convert(\"stripPackage\", package=\"layout\"))\n\n\n\n\n\n","category":"method"},{"location":"#SBML.set_level_and_version-Tuple{Any,Any}","page":"Documentation","title":"SBML.set_level_and_version","text":"set_level_and_version(level, version)\n\nA converter to pass into readSBML that enforces certain SBML level and version.\n\n\n\n\n\n","category":"method"},{"location":"#Data-helpers","page":"Documentation","title":"Data helpers","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"utils.jl\"]","category":"page"},{"location":"#SBML.extensive_kinetic_math-Tuple{SBML.Model,SBML.Math}","page":"Documentation","title":"SBML.extensive_kinetic_math","text":"extensive_kinetic_math(m::SBML.Model, formula::SBML.Math)\n\nConvert a SBML math formula to \"extensive\" kinetic laws, where the references to species that are marked as not having only substance units are converted from amounts to concentrations.\n\nHandling of units in the conversion process is ignored in this version.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.getLBs-Tuple{SBML.Model}","page":"Documentation","title":"SBML.getLBs","text":"getLBs(m::SBML.Model)::Vector{Tuple{Float64,String}}\n\nExtract a vector of lower bounds of reaction rates from the model. All bounds are accompanied with the unit of the corresponding value (this behavior is based on SBML specification).\n\n\n\n\n\n","category":"method"},{"location":"#SBML.getOCs-Tuple{SBML.Model}","page":"Documentation","title":"SBML.getOCs","text":"getOCs(m::SBML.Model)::Vector{Float64}\n\nExtract the vector of objective coefficients of each reaction.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.getS-Tuple{SBML.Model}","page":"Documentation","title":"SBML.getS","text":"function getS(m::SBML.Model; zeros=spzeros)::Tuple{Vector{String},Vector{String},AbstractMatrix{Float64}}\n\nExtract the vector of species (aka metabolite) identifiers, vector of reaction identifiers, and the (dense) stoichiometry matrix from an existing SBML.Model. Returns a tuple with these values.\n\nThe matrix is sparse by default (initially constructed by SparseArrays.spzeros). You can fill in a custom empty matrix constructed to argument zeros; e.g. running with zeros=zeros will produce a dense matrix.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.getUBs-Tuple{SBML.Model}","page":"Documentation","title":"SBML.getUBs","text":"getUBs(m::SBML.Model)::Vector{Tuple{Float64,String}}\n\nLikewise to getLBs, extract the upper bounds.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.initial_amounts-Tuple{SBML.Model}","page":"Documentation","title":"SBML.initial_amounts","text":"initial_amounts(m::SBML.Model; convert_concentrations = false)\n\nReturn initial amounts for each species as a generator of pairs species_name => initial_amount; the amount is set to nothing if not available. If convert_concentrations is true and there is information about initial concentration available together with compartment size, the result is computed from the species' initial concentration.\n\nIn the current version, units of the measurements are completely ignored.\n\nExample\n\n# get the initial amounts as dictionary\nDict(initial_amounts(model, convert_concentrations = true))\n\n# remove the empty entries\nDict(k => v for (k,v) in initial_amounts(model) if !isnothing(v))\n\n\n\n\n\n","category":"method"},{"location":"#SBML.initial_concentrations-Tuple{SBML.Model}","page":"Documentation","title":"SBML.initial_concentrations","text":"initial_concentrations(m::SBML.Model; convert_amounts = false)\n\nReturn initial concentrations of the species in the model. Refer to work-alike initial_amounts for details.\n\n\n\n\n\n","category":"method"},{"location":"#Math-and-Symbolics.jl-compatibility","page":"Documentation","title":"Math and Symbolics.jl compatibility","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"symbolics.jl\"]","category":"page"},{"location":"#SBML.default_symbolics_constants","page":"Documentation","title":"SBML.default_symbolics_constants","text":"const default_symbolics_constants::Dict{String, Any}\n\nA dictionary of default constants filled in place of SBML Math constants in the symbolics conversion.\n\n\n\n\n\n","category":"constant"},{"location":"#SBML.default_symbolics_mapping","page":"Documentation","title":"SBML.default_symbolics_mapping","text":"default_symbolics_mapping :: Dict{String,Any}\n\nDefault mapping of SBML function names to Julia functions, represented as a dictionary from Strings (SBML names) to anything evaluable as Julia&Symbolics functions, such as symbols and expressions.\n\nThe default mapping only contains the basic SBML functions that are unambiguously represented in Julia; it is supposed to be extended by the user if more functions need to be supported.\n\n\n\n\n\n","category":"constant"},{"location":"#Base.convert-Tuple{Type{Symbolics.Num},SBML.Math}","page":"Documentation","title":"Base.convert","text":"Base.convert(\n    ::Type{Num},\n    x::SBML.Math;\n    mapping = default_symbolics_mapping,\n    convert_time = (x::SBML.MathTime) -> Num(Variable(Symbol(x.id))).val,\n    convert_const = (x::SBML.MathConst) -> Num(default_symbolics_constants[x.id]),\n)\n\nConvert SBML.Math to Num type from Symbolics package. The conversion of functions can be customized by supplying a custom mapping; if nothing is supplied, default_symbolics_mapping that translates basic functions to their Julia equivalents is assumed.\n\nTranslation of MathLambda is not supported by Symbolics.\n\nMathTime is handled specially, the function from the argument convert_time is called to possibly specify any desired behavior. By default, it just creates a variable with the same name as the time variable name stored in SBML.\n\n\n\n\n\n","category":"method"},{"location":"#Internal-math-helpers","page":"Documentation","title":"Internal math helpers","text":"","category":"section"},{"location":"","page":"Documentation","title":"Documentation","text":"Modules = [SBML]\nPages = [\"math.jl\"]","category":"page"},{"location":"#SBML.ast_is-Tuple{Ptr{Nothing},Symbol}","page":"Documentation","title":"SBML.ast_is","text":"ast_is(ast::VPtr, what::Symbol)::Bool\n\nHelper for quickly recognizing kinds of ASTs\n\n\n\n\n\n","category":"method"},{"location":"#SBML.parse_math-Tuple{Ptr{Nothing}}","page":"Documentation","title":"SBML.parse_math","text":"parse_math(ast::VPtr)::Math\n\nThis attempts to parse out a decent Julia-esque (Math AST from a pointer to ASTNode_t.\n\n\n\n\n\n","category":"method"},{"location":"#SBML.parse_math_children-Tuple{Ptr{Nothing}}","page":"Documentation","title":"SBML.parse_math_children","text":"parse_math_children(ast::VPtr)::Vector{Math}\n\nRecursively parse all children of an AST node.\n\n\n\n\n\n","category":"method"}]
}
