var lista = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

println(lista.reduceRight((x, y) => x + y))
println(lista.reduceLeft((x, y) => x + y))
println(lista.reduceRight((x, y) => x - y))
println(lista.reduceLeft((x, y) => x - y))
println(lista.reduce((x, y) => x + y))


