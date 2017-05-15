# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

b1 = Bench.create(
  description: "Bench at Union Square",
  lat: 37.7445264,
  lng: -122.4353981
)

b2 = Bench.create(
  description: "Bench at Lands End",
  lat: 37.7598176,
  lng: -122.463071
)

b3 = Bench.create(
  description: "Bench at Tiled Steps",
  lat: 37.7598176,
  lng: -122.463071
)

u = User.create(
  username: "user",
  password: "password"
)
