-- DATABASE name is: 'react_gallery'

-- Run below to create "pictures" table and insert my pictures
CREATE TABLE pictures (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(400) NOT NULL,
    "description" VARCHAR,
    "likes" INT DEFAULT 0,
    "created_date" TIMESTAMP not null default NOW()
);

INSERT INTO pictures
	(path, description, likes, created_date)
VALUES
    ('images/belle-lucy.png', 'Our dog Belle with Lucy before she turned into a big crazy.', 3, '2022-11-24' ),
    ('images/ben-at-park.png', 'My son Bennett having fun at the park in Mora, MN', 1, '2022-11-24'  ),
    ('images/ben-catching-leaves.png', 'Ben trying to catch leaves in the fall of 2022', 0, '2022-11-24'  ),
    ('images/ben-hunter-in-sami.png', 'The boys playing in Dusti`s wheeling Samuri!', 0, '2022-11-24'  ),
    ('images/angerranger-and-bluebronco.png', 'The Anger Ranger and Blue Bronco wheeling in Gilbert, MN!', 5, '2022-11-24'  ),
    ('images/ben-in-leaves.png', 'Benny having a blast playing in the leaf pile', 0, '2022-11-24'  ),
    ('images/ben-josh-park.png', 'Me and the tyrant having fun at the park! Summer `22', 2, '2022-11-24'  ),
    ('images/ben-lady.png', 'One of the few pictures we have with Ben and our dog Lady before she passed.', 0, '2022-11-24'  ),
    ('images/ben-lucy.png', 'Benny having fun playing with Lucy!!!', 0, '2022-11-24'  ),
    ('images/boat-party.png', 'Fun snorkling trip in the Dominican Republic!', 0, '2022-11-24'  ),
    ('images/dartboard.png', 'A dartboard case I made for my GranBoard. Solid walnut with a laser etched tribute to our dog Lady.', 0, '2022-11-24'  ),
    ('images/ebola-proof.png', 'Funny Ebola-Proof costume I made several years ago, was actually useful in 2020.....', 0, '2022-11-24'  ),
    ('images/Fam-in-black-white.png', 'A really nice photo of Jenni, Bennett, and myself.', 0, '2022-11-24'  ),
    ('images/fam-in-tanya.png', 'The whole fam testing the seats in the new off-road rig.', 0, '2022-11-24'  ),
    ('images/fat-pants-friday.png', '6Smith in Wayzata does a Fat Pants Friday, 3,000+ calories and always an asparagus so you get your vegetables!', 0, '2022-11-24'  ),
    ('images/fishing-double.png', 'Photo of a goat taken at Glacier National Park.', 0, '2022-11-24'  ),
    ('images/herc-hill.png', 'Hercules Hill in Gilbert, MN. A fun and steep hill to take our trucks up, you will notice the trail in the bottom of the picture.', 0, '2022-11-24'  ),
    ('images/jen-and-i.png', 'Jen and I walking a trail somewhere in the woods.', 0, '2022-11-24'  ),
    ('images/lucy-silly.png', 'Lucy being silly!', 0, '2022-11-24'  ),
    ('images/smoker-with-wings.png', 'I love cooking on the pellet smoker, here are some wings I made recently.', 0, '2022-11-24'  ),
    ('images/snowmobiles.png', 'I enjoy living outside of the city so we can drive our snowmobiles right to the trails!', 0, '2022-11-24'  ),
    ('images/tanya.png', 'The off-road truck I am working on building now. Geo Tracker body on a custom frame.', 0, '2022-11-24'  ),
    ('images/tinaaa.png', 'My old truck I used for wheeling, long live TINNAAAAAAAA!!!!!', 0, '2022-11-24' );
