Park.destroy_all
User.destroy_all
ParkComment.destroy_all
Trail.destroy_all
TrailComment.destroy_all



providence_canyon = Park.create({name: "Providence Canyon", 
description: "\tGeorgia’s “Little Grand Canyon” is a testament to the power of man’s influence on the land. Massive gullies as deep as 150 feet were caused simply by poor farming practices during the 1800s, yet today they make some of the prettiest photographs within the state. The rare Plumleaf Azalea grows only in this region and blooms during July and August when most azaleas have lost their color. The canyon soil’s pink, orange, red and purple hues make a beautiful natural painting at this quiet park.
\tVisitors can enjoy views of the canyons from the rim trail, taking care to stay behind fences and off the fragile canyon edge. Hikers who explore the deepest canyons will usually find a thin layer of water along the trail, indication of the water table below. Guests who hike to canyons 4 and 5 may want to join the Canyon Climbers Club. Backpackers can stay overnight along the backcountry trail which highlights portions of the canyon and winds through mixed forest. Camping, cottages and efficiency units are available nearby at Florence Marina State Park on 45,000 acre Lake Walter F. George.", 
image: "https://i.imgur.com/tLEc6Mx.jpg",
address: "8930 Canyon Rd, Lumpkin, GA 31815", 
lat: 32.0675, 
lon: -84.9037,
zipcode: 31815

})

sweetwater_creek = Park.create({name: "Sweetwater Creek", 
description: "Sweetwater Creek State Park is a 2,549 acre Georgia state park located in the New Manchester area of east Douglas County, 15 miles from downtown Atlanta. The park is named after Sweetwater Creek which runs through the park.", 
image: "https://i.imgur.com/wIsLO96.jpg",
address: "1750 Mt Vernon Rd, Lithia Springs, GA 30122", 
lat: 33.7525, 
lon: -84.6287,
zipcode: 30122
})


cloudland_canyon = Park.create({name: "Cloudland Canyon", 
description: "Cloudland Canyon State Park is in northwest Georgia, on the western edge of Lookout Mountain. Boulder-strewn Sitton Gulch Creek cuts a deep gorge into the mountain. Sitton's Gulch Trail runs parallel to the creek. The short, steep Waterfalls Trail, with stairs down into the canyon, leads to Cherokee Falls and Hemlock Falls, where water cascades down into pools. Nearby, Sitton’s Cave has mineral formations.", 
image: "https://i.imgur.com/Cg2cuDO.jpg",
address: "122 Cloudland Canyon Park Rd, Rising Fawn, GA 30738", 
lat: 34.8395, 
lon: -85.4840,
zipcode: 30738
})


panola_mountain = Park.create({name: "Panola Mountain", 
description: "\tJust 15 minutes from Atlanta is a recreational haven for all ages and interests. Visitors can picnic while children work off energy on the playground. The park offers archery, boat rental, geocaching, orienteering, birding and tree-climbing programs. A paved trail is open for biking, roller blading, jogging and dog-walking, while forested fitness trails are open for hiking and running.", 
image: "https://i.imgur.com/eaNYGU7.jpg",
address: "2620 Highway 155 SW
Stockbridge, GA 30281
Henry County", 
lat: 33.6250, 
lon: -84.1715,
zipcode: 30281
})


vogel = Park.create({name: "Vogel", 
description: "\tVogel State Park is a 233-acre or 94 hectares state park located at the base of Blood Mountain in the Chattahoochee National Forest. It became one of the first two parks in Georgia when it founded a state park system in 1931", 
image: "https://i.imgur.com/6ETCg1X.jpg",
address: "405 Vogel State Park Rd, Blairsville, GA 30512", 
lat: 34.7649, 
lon: -83.9255,
zipcode: 30512
})



tallulah_gorge = Park.create({name: "Tallulah Gorge", 
description: "One of the most spectacular canyons in the eastern U.S., Tallulah Gorge is two miles long and nearly 1,000 feet deep. Visitors can hike rim trails to several overlooks, or they can obtain a permit to hike to the gorge floor (100 per day, not available during water releases). A suspension bridge sways 80 feet above the rocky bottom, providing spectacular views of the river and waterfalls. Tightrope walkers have twice crossed the gorge, and visitors can still see towers used by Karl Wallenda. A paved path follows an on old railroad bed, perfect for strollers and bicycles, while mountain bikers can test their skills on a challenging 10 mile trail.", 
image: "http://gastateparks.org/sites/default/files/parks/TallulahGorge.jpg",
address: "338 Jane Hurt Yarn Drive
Tallulah Falls, GA 30573
Rabun County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30573
})

skidaway_island = Park.create({name: "Skidaway Island", 
description: "\tThis popular park on Lake Allatoona is ideal for swimming, water skiing and fishing. Visitors can bring their own boats or rent from nearby marinas. A sand swimming beach is nestled in a cove and surrounded by trees, providing a great place to cool off during summer. Picnic shelters and group shelters may be rented for meetings, parties, reunions and other celebrations. Guests often stay overnight in rental cottages, a spacious campground, or the park’s lakeside yurt.

\tWhile best known for the 12,000 acre lake, Red Top Mountain is also a hiker’s haven. More than 15 miles of trails wind through the forested park, providing opportunities for exercise and nature photography. A short, paved trail behind the park office is suitable for wheelchairs and strollers, welcoming guests to explore a reconstructed 1860s homestead. The gravel-topped 4 mile Iron Hill Trail is open to both hikers and bikers, offering pretty views of the lake’s shoreline.", 
image: "https://i.imgur.com/p4QFU11.jpg",
address: "50 Lodge Road SE
Acworth, GA 30102
Bartow County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30102
})

red_top_mountain = Park.create({name: "Red Top Mountain", 
description: "", 
image: "https://i.imgur.com/oH7FhCy.jpg",
address: "338 Jane Hurt Yarn Drive
Tallulah Falls, GA 30573
Rabun County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30573
})


amicalola_falls = Park.create({name: "Amicalola Falls", 
description: "\tAmicalola Falls State Park is nestled in North Georgia’s mossy, waterfall-filled Chattahoochee National Forest, set in the rolling, vibrant-green southern Appalachian Mountains. It’s one of the most popular, and most visited, of Georgia’s State Parks – and for a good reason. At the heart of the park, the Georgia’s tallest waterfall spills down a towering bluff, falling 720 feet into a mossy, boulder-filled forest. It’s the highest cascading falls east of the Mississippi River.", 
image: "https://i.imgur.com/S5vV65x.jpg",
address: "280 Amicalola Falls State Park Rd, Dawsonville, GA 30534", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30534
})


stephen_c_foster = Park.create({name: "Stephen C Foster", 
description: "\tThis remote park is a primary entrance to the legendary Okefenokee Swamp—one of Georgia's seven natural wonders. Spanish moss-laced trees reflect off the black swamp waters, while cypress knees rise upward from the glass-like surface. Here, paddlers and photographers will enjoy breathtaking scenery and abundant wildlife. Alligators, turtles, raccoons, black bears, deer, ibis, herons, wood storks, red-cockaded woodpeckers and numerous other creatures make their homes in the 402,000 acre refuge. Stargazers will appreciate the particularly dark sky.

\tSame-day reservations are recommended for guided pontoon boat tours of the swamp. Sunset tours may be available. More adventurous visitors may wish to rent canoes, kayaks or jon boats for further exploration of the swamp, including a trip to historic Billy’s Island. Fishing in the lake is excellent, particularly for warmouth, bluegill, catfish, chain pickerel and bowfin. Boating is dependent upon water levels.",
image: "https://i.imgur.com/Th47a4a.jpg",
address: "17515 GA-177, Fargo, GA 31631", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 31631
})


## Users 

tommy = User.create({
    email: "tommy_pickles@gmail.com",
    password: "blahblah1234",
    password_confirmation: "blahblah1234"
})

veronica = User.create({
    email: "veronica@people.com",
    password: "blahblah1234",
    password_confirmation: "blahblah1234"
})

## Park Comment 

tommy_comment = ParkComment.create({
    title: "What a hike!",
    content: "That was a insane amount of stairs!",
    user_id: tommy.id,
    park_id: tallulah_gorge.id
})


## Trails 

# # yes:
# pet_friendly: "https://i.imgur.com/vEB2ZHp.png"

# #no :
# pet_friendly: "https://i.imgur.com/kVYdbSU.png"



providence_canyon_loop_trail = Trail.create({
    difficulty: "https://i.imgur.com/K87he5Q.png",
    elevation_profile: "https://media4.trover.com/T/54fa3649ae8d8a0e88001865/fixedw_large_4x.jpg",
    image: "http://static.panoramio.com/photos/large/1867033.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.85,
    park_id: providence_canyon.id,
    name: "Providence Canyon Loop Trail",
    description: "\tThe White Blaze Canyon Loop Trail circles nine of the canyons.
    To hike canyons 1-5 from the Visitor Center, hike ¼ of a mile
    down to the creek bed, and turn left, following the creek bed
    into the canyons. Hikers may reach canyons 6-9 by turning left
    into the second creek further down the Canyon Loop Trail. After
    arriving at the end of each canyon, backtrack out to return to the
    trail. Turn right on the Canyon Loop Trail to return to the Visitor
    Center, or turn left on the trail to continue the loop. While hiking
    through the day-use area, follow the fence line for the best
    overlooks. The soils are very fragile on the canyon walls, so no
    climbing is allowed from the canyon floor or rim. While hiking
    into the canyons, it is best to stay in the middle of the creek
    beds, because the soils on the side can be very muddy, similar
    to quicksand. The canyon floors are prone to be wet or muddy,
    so wear appropriate footwear."
})

homestead_trail = Trail.create({
    difficulty: "https://i.imgur.com/Pjy7TV9.png",
    elevation_profile: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Providence_Canyon_old_car.jpg",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Providence_canyon_car1.jpg/2560px-Providence_canyon_car1.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 0.25,
    park_id: providence_canyon.id,
    name: "Homestead Trail",
    description: "Take a trek back to an abandoned homestead. One of the quirkier attractions of the state park is an abandoned homestead including nearly a dozen rusty, 1950s-era cars and trucks. Due to the environmental damage that removing the vehicles would cause, park officials have decided to leave them alone."
})


backcountry_red_blaze_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/dm0xbJM.jpg",
    image: "https://i.imgur.com/y03TjAb.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 7.05,
    park_id: providence_canyon.id,
    name: "Back Country Red Blaze Trail",
    description: "The 7-mile Backcountry Trail leads into the forested area off of
    the White Blaze Canyon Loop Trail. The beginning of it is ¼ of
    a mile down the Loop Trail at the creek bed itself. Instead of
    turning left into the canyons, turn right on the creek bed. This
    is the beginning of the Backcountry Trail, which winds through
    some River Birch. After about two miles, it becomes rugged,
    ascending a steep grade. It follows an old logging road, where
    most of the primitive campsites are located. At site #2, a
    shortcut is available which will shorten the trail about ¾ of a
    mile. Further down the trail, as the trail becomes rugged again,
    six canyons may be viewed, but they are not accessible to the
    hikers. The Backcountry Trail will dead-end into the Loop Trail,
    where hikers will turn right. This will continue through the day
    use area. Follow the fence line through the picnic area for the
    best overlooks, returning to the Visitor Center."
})


sweetwater_creek_white_trail = Trail.create({
    difficulty: "moderate",
    elevation_profile: "https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/providence-canyon-hiking-trail-loop/providence-canyon-trail-elevation-profile.png",
    image: "https://www.atlantatrails.com/images/sweetwater-creek-state-park-white-trail/03-sweetwater-creek-white-trail-best-atlanta-hikes@2x.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.10,
    park_id: sweetwater_creek.id,
    name: "Sweetwater Creek White Trail"

})

hurricane_falls_trail = Trail.create({
    difficulty: "difficult",
    elevation_profile: "https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/images/providence-canyon-hiking-trail-loop/providence-canyon-trail-elevation-profile.png",
    image: "https://2wzlm92dvpgd3a560m9ue6tx-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/07-tallulah-gorge-hurricane-falls-trail@2x.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 2.0,
    park_id: tallulah_gorge.id,
    name: "Hurricane Falls Trail"

})


veronica_comment = TrailComment.create({
    title: "He proposed here",
    content: "It was so romantic!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})

veronica_comment = TrailComment.create({
    title: "Our Favorite",
    content: "We've been here about a zillion times and it's just one of the most magnificent!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})

veronica_comment = TrailComment.create({
    title: "A Hit!",
    content: "The kids absolutely loved it!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})






veronica_comment = ParkComment.create({
    title: "A Hit!",
    content: "The kids absolutely loved it!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})


veronica_comment = ParkComment.create({
    title: "Our Favorite",
    content: "We've been here about a zillion times and it's just one of the most magnificent!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})

