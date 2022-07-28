puts "Seeding...."

5.times do
  User.create(
    name: Faker::name,
    password: 123
  )
end

puts "...Done seeding"