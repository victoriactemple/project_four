Park.destroy_all
User.destroy_all
ParkComment.destroy_all
Trail.destroy_all
TrailComment.destroy_all

providence_canyon = Park.create({name: "Providence Canyon", 
description: "Providence Canyon State Outdoor Recreation Area is a 1,003 acres state park located in Stewart County in southwest Georgia. The park contains Providence Canyon, which is sometimes called Georgia's 'Little Grand Canyon'.", 
image: "http://gastateparks.org/sites/default/files/parks/ProvidenceCanyon.jpg",
address: "8930 Canyon Rd, Lumpkin, GA 31815", lat: 32.0675, 
lon: -84.9037
})

sweetwater_creek = Park.create({name: "Sweetwater Creek", 
description: "Sweetwater Creek State Park is a 2,549 acre Georgia state park located in the New Manchester area of east Douglas County, 15 miles from downtown Atlanta. The park is named after Sweetwater Creek which runs through the park.", 
image: "https://i.ytimg.com/vi/44kMEO39Bu0/maxresdefault.jpg",
address: "1750 Mt Vernon Rd, Lithia Springs, GA 30122", lat: 33.7525, 
lon: -84.6287
})


cloudland_canyon = Park.create({name: "Cloudland Canyon", 
description: "Cloudland Canyon State Park is in northwest Georgia, on the western edge of Lookout Mountain. Boulder-strewn Sitton Gulch Creek cuts a deep gorge into the mountain. Sitton's Gulch Trail runs parallel to the creek. The short, steep Waterfalls Trail, with stairs down into the canyon, leads to Cherokee Falls and Hemlock Falls, where water cascades down into pools. Nearby, Sitton’s Cave has mineral formations.", 
image: "http://media-cdn.timesfreepress.com/img/news/tease/2013/05/30/Cloudland_t618_t1070_h04797ef87fd1bbff0de64d8f73a71fae70ac0ad5.jpg",
address: "122 Cloudland Canyon Park Rd, Rising Fawn, GA 30738", 
lat: 34.8395, 
lon: -85.4840
})


panola_mountain = Park.create({name: "Panola Mountain", 
description: "Just 15 minutes from Atlanta is a recreational haven for all ages and interests. Visitors can picnic while children work off energy on the playground. The park offers archery, boat rental, geocaching, orienteering, birding and tree-climbing programs. A paved trail is open for biking, roller blading, jogging and dog-walking, while forested fitness trails are open for hiking and running.", 
image: "https://cdn-assets.alltrails.com/uploads/photo/image/11167434/extra_large_3c714b9c2d3f19823ee8a20f172885f9.jpg",
address: "2620 Highway 155 SW
Stockbridge, GA 30281
Henry County", 
lat: 33.6250, 
lon: -84.1715
})


vogel = Park.create({name: "Vogel", 
description: "Vogel State Park is a 233-acre or 94 hectares state park located at the base of Blood Mountain in the Chattahoochee National Forest. It became one of the first two parks in Georgia when it founded a state park system in 1931", 
image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vogel-state-park-color-robert-walters.jpg",
address: "405 Vogel State Park Rd, Blairsville, GA 30512", 
lat: 34.7649, 
lon: -83.9255
})



tallulah_gorge = Park.create({name: "Tallulah Gorge", 
description: "One of the most spectacular canyons in the eastern U.S., Tallulah Gorge is two miles long and nearly 1,000 feet deep. Visitors can hike rim trails to several overlooks, or they can obtain a permit to hike to the gorge floor (100 per day, not available during water releases). A suspension bridge sways 80 feet above the rocky bottom, providing spectacular views of the river and waterfalls. Tightrope walkers have twice crossed the gorge, and visitors can still see towers used by Karl Wallenda. A paved path follows an on old railroad bed, perfect for strollers and bicycles, while mountain bikers can test their skills on a challenging 10 mile trail.", 
image: "http://gastateparks.org/sites/default/files/parks/TallulahGorge.jpg",
address: "338 Jane Hurt Yarn Drive
Tallulah Falls, GA 30573
Rabun County", 
lat: 34.7335, 
lon: -83.3715
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

providence_canyon_loop_trail = Trail.create({
    difficulty: "easy",
    elevation_profile: "thiswillbeaprettypicture.jpg",
    image: "thiswillbeaprettypicture.jpg",
    pet_friendly: false,
    distance: 0.25,
    park_id: providence_canyon.id,
    name: "Providence Canyon Loop Trail"

})

veronica_comment = TrailComment.create({
    title: "He proposed here",
    content: "It was so romantic!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})



veronica_comment = ParkComment.create({
    title: "He proposed here",
    content: "It was so romantic!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})


veronica_comment = ParkComment.create({
    title: "He proposed here",
    content: "It was so romantic!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})

