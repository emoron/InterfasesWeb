# Comentario
miVariable = "hola"

square = (x) -> x * x

sum =(nums...) ->
  result = 0
  nums.forEach (n) -> result += n
  result

a = "Hello"
times = (a,b) -> a*b
console.log(sum(2,4,5))

for name in ["Roger","Aldo","Manuel"]
  console.log name
