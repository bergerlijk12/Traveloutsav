-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 20, 2015 at 09:18 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `travel`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `activity_title`) VALUES
(1, 'Food tours of New Delhi and Old Delhi'),
(2, 'Cooking class( Depending on the numbers of days you have)'),
(3, 'Visit the area’s snack vendor'),
(4, 'Introduction to Spices'),
(5, 'Kitchen Tours in different restaurants in Delhi'),
(6, 'Sightseeing of Old Delhi- Red fort and Jama Mosque( if time permits)'),
(7, 'Shopping at chandni chowk market( if time permits)'),
(8, 'Dargah of Nizamuddin Auliya'),
(9, 'Chiragh-I-Delhi Dargah'),
(10, 'Moth Ki Masjid'),
(11, 'Jama Masjid'),
(12, 'Khirki Masjid(If time permits)');

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_cities_idx` (`city_id`),
  KEY `fk_address_states_idx` (`state_id`),
  KEY `fk_address_countries_idx` (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `address`
--


-- --------------------------------------------------------

--
-- Table structure for table `address_type`
--

CREATE TABLE IF NOT EXISTS `address_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `address_type`
--


-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `city_name_UNIQUE` (`city_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `city_name`) VALUES
(2, 'Agra'),
(1, 'Delhi'),
(3, 'Jaipur'),
(4, 'Mumbai');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_number` varchar(20) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contact_number_UNIQUE` (`contact_number`),
  KEY `fk_contact_type_idx` (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `contact`
--


-- --------------------------------------------------------

--
-- Table structure for table `contact_type`
--

CREATE TABLE IF NOT EXISTS `contact_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `short_name` char(1) NOT NULL,
  `full_name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `contact_type`
--


-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `country_name_UNIQUE` (`country_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country_name`) VALUES
(1, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `currency_type`
--

CREATE TABLE IF NOT EXISTS `currency_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `currency_type`
--

INSERT INTO `currency_type` (`id`, `currency_name`) VALUES
(1, '$'),
(2, 'Rs.');

-- --------------------------------------------------------

--
-- Table structure for table `duration_type`
--

CREATE TABLE IF NOT EXISTS `duration_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `duration_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `duration_type`
--

INSERT INTO `duration_type` (`id`, `duration_title`) VALUES
(1, '1 Day / 0 Nights');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE IF NOT EXISTS `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gallery_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `gallery_title`) VALUES
(1, 'Delhi Tour'),
(2, 'Agra Tour');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_image`
--

CREATE TABLE IF NOT EXISTS `gallery_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tour_id` int(11) NOT NULL,
  `gallery_id` int(11) NOT NULL,
  `caption_text` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `gallery_image`
--

INSERT INTO `gallery_image` (`id`, `tour_id`, `gallery_id`, `caption_text`, `image_path`) VALUES
(1, 3, 0, '', 'assets/tour_img/delhi_photo.jpg'),
(2, 4, 0, '', 'assets/tour_img/delhi_tour.jpg'),
(3, 5, 0, '', 'assets/tour_img/delhi_mosque.jpg'),
(4, 6, 0, '', 'assets/tour_img/tour-mainimg.jpg'),
(5, 7, 0, '', 'assets/tour_img/jaipur-tour.jpg'),
(6, 8, 0, '', 'assets/tour_img/mumbai-tour.jpg'),
(7, 9, 0, '', 'assets/tour_img/neemrana-tour.jpg'),
(8, 0, 1, '', 'assets/tour_img/image1.jpg'),
(9, 0, 1, '', 'assets/tour_img/image2.jpg'),
(10, 0, 1, '', 'assets/tour_img/image3.jpg'),
(11, 0, 1, '', 'assets/tour_img/image4.jpg'),
(12, 0, 1, '', 'assets/tour_img/image5.jpg'),
(13, 0, 2, '', 'assets/tour_img/agra1.jpg'),
(14, 0, 2, '', 'assets/tour_img/agra2.jpg'),
(15, 0, 2, '', 'assets/tour_img/agra3.jpg'),
(16, 0, 2, '', 'assets/tour_img/agra4.jpg'),
(17, 0, 2, '', 'assets/tour_img/agra5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `inclusion`
--

CREATE TABLE IF NOT EXISTS `inclusion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inclusion_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `inclusion`
--

INSERT INTO `inclusion` (`id`, `inclusion_title`) VALUES
(1, 'Hotel Pick up and drop by A/C Chuffer driven Car'),
(2, 'English speaking guide'),
(3, 'Street Food'),
(4, 'Visit to the Spice Market'),
(5, 'One mineral bottled water provided during the trip'),
(6, 'Rikshaw Ride in Old Delhi'),
(7, 'Muslim English speaking guide'),
(8, 'Cost based upon 02 Adults travelling together'),
(9, 'Battery van ride to Taj Mahal'),
(10, 'All applicable taxes'),
(11, 'Toll Taxes, parking and fuel'),
(12, 'Elephant ride at Amer Fort'),
(13, 'Lunch at neemrana fort and palace with Zipping'),
(14, 'Personal expenses'),
(15, 'Meals'),
(16, 'Anything which is not included in the inclusions'),
(17, 'Monument entry charges'),
(18, 'Insurance'),
(19, 'Personal purchases');

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

CREATE TABLE IF NOT EXISTS `note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note_title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `note`
--

INSERT INTO `note` (`id`, `note_title`) VALUES
(1, 'If you have days then the trip can be divided in 2 days'),
(2, 'The pickup and drop off timings subjected to change depending on the traffic and Road  condition'),
(3, '');

-- --------------------------------------------------------

--
-- Table structure for table `privilage`
--

CREATE TABLE IF NOT EXISTS `privilage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `privilage_name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `privilage_name_UNIQUE` (`privilage_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `privilage`
--


-- --------------------------------------------------------

--
-- Table structure for table `query`
--

CREATE TABLE IF NOT EXISTS `query` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tour_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `adult_count` int(11) NOT NULL,
  `child_count` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `travel_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_query_tours_idx` (`tour_id`),
  KEY `fk_query_countries_idx` (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `query`
--


-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `role`
--


-- --------------------------------------------------------

--
-- Table structure for table `role_privilage`
--

CREATE TABLE IF NOT EXISTS `role_privilage` (
  `role_id` int(11) NOT NULL,
  `privilage_id` int(11) NOT NULL,
  KEY `role_privilage_roles_idx` (`role_id`),
  KEY `role_privilage_privilages_idx` (`privilage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role_privilage`
--


-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE IF NOT EXISTS `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `state_name_UNIQUE` (`state_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`id`, `state_name`) VALUES
(1, 'Delhi'),
(2, 'Mumbai'),
(3, 'Rajasthan'),
(4, 'Utter Pradesh');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `testimonial` varchar(1000) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `full_name`, `testimonial`, `image_path`, `created_date`, `is_deleted`) VALUES
(1, 'Alexander Doe', 'Donec quis vulputate lectus. Sed tempor venenatis elementum. Cras commodo lacus nec imperdiet dignissim. Nunc scelerisque interdum diam a aliquam. Vestibulum eget massa auctor, consequat quam ut, auctor nibh. Nam volutpat odio sit amet ullamcorper placerat. Aliquam porta tincidunt urna ac commodo.', 'assets/img/alexander_doe.jpg', '2015-09-21 01:34:01', NULL),
(2, 'Perry Long', 'Vivamus facilisis mi a mauris ultrices fermentum. Aliquam porta eleifend mi non laoreet. Donec ornare vitae nulla pulvinar tristique. Sed vulputate in sapien eu eleifend. Donec id rhoncus mauris. Cras adipiscing at magna in volutpat. Nullam eleifend elit dui, quis vulputate magna mattis ut. Vestibulum ornare arcu mauris, sed.', 'assets/img/perry_long.jpg', '2015-09-21 01:34:01', NULL),
(3, 'Jamie Hunt', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 'assets/img/jamie_hunt.jpg', '2015-09-21 01:34:01', NULL),
(4, 'Alexander Doe', 'Donec quis vulputate lectus. Sed tempor venenatis elementum. Cras commodo lacus nec imperdiet dignissim. Nunc scelerisque interdum diam a aliquam. Vestibulum eget massa auctor, consequat quam ut, auctor nibh. Nam volutpat odio sit amet ullamcorper placerat. Aliquam porta tincidunt urna ac commodo.', 'assets/img/alexander_doe.jpg', '2015-09-21 02:48:11', NULL),
(5, 'Perry Long', 'Vivamus facilisis mi a mauris ultrices fermentum. Aliquam porta eleifend mi non laoreet. Donec ornare vitae nulla pulvinar tristique. Sed vulputate in sapien eu eleifend. Donec id rhoncus mauris. Cras adipiscing at magna in volutpat. Nullam eleifend elit dui, quis vulputate magna mattis ut. Vestibulum ornare arcu mauris, sed.', 'assets/img/perry_long.jpg', '2015-09-21 02:48:11', NULL),
(6, 'Jamie Hunt', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 'assets/img/jamie_hunt.jpg', '2015-09-21 02:48:11', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE IF NOT EXISTS `tours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `overview` varchar(1000) NOT NULL,
  `city_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  `duration_id` int(11) NOT NULL,
  `currency_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tours_cities_idx` (`city_id`),
  KEY `fk_tours_states_idx` (`state_id`),
  KEY `fk_tours_countries_idx` (`country_id`),
  KEY `fk_tours_types_idx` (`type_id`),
  KEY `fk_tours_durations_idx` (`duration_id`),
  KEY `fk_tours_currencies_idx` (`currency_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `title`, `description`, `overview`, `city_id`, `state_id`, `country_id`, `zipcode`, `type_id`, `duration_id`, `currency_id`, `price`, `image_path`, `created`, `updated`, `is_deleted`) VALUES
(3, 'Photography tour of Delhi', 'Delhi- The capital city of India has so much to offer. It caters to all interest of the tourist  and photography is something capturing the moments. Depending on the number of days   we will help you organize your trip your trip and insure that you don’t miss out the more   important heritages sites , attractions specially  for photography', 'Pick up from your hotel and our chauffer driven will take you towards the Monuments site-  Humayun Tomb, Qutub Minar.  Later on get driven to Old Delhi to visit Red fort, Jama Mosque Chandni Chowk, Local markets,   Spice markets, Lozal markets.  By the evening our vehicle will drop you at your hotel.', 1, 1, 1, '411001', 1, 1, 2, 2000, '', '0000-00-00 00:00:00', '2015-09-17 13:29:16', NULL),
(4, 'Cooking/Culinary Tour', 'These Culinary tours are the mixture of food walks, cooking demos, sightseeing, visit  to various street food shops. Experience a walking tour of Delhi to learn about the   area’s snack vendors and Spice Markets. All these activities will be lead by our Team   and we will take you towards some of the oldest shop producing these world famous   treats..', '', 1, 1, 1, '411001', 1, 1, 2, 2000, '', '0000-00-00 00:00:00', '2015-09-17 13:29:16', NULL),
(5, 'Mosque Tour with TravelOutsav', 'There are a number of Mosques in Delhi and some of the Mosque is worth visiting.  We will take you towards the famous Mosques &Dargah in and around Delhi', '', 1, 1, 1, '411001', 1, 1, 2, 2500, '', '0000-00-00 00:00:00', '2015-09-17 13:34:49', NULL),
(6, 'Same day Agra trip', 'A historic city situated on the bank of the River Yamuna, the city has earned fame as the former Mughal emperor''s capital. Above all, this city houses the world renowned monument “Taj Mahal”. World knows this monument as a legend of eternal love of an Emperor for his favorite Queen!!! Of course world also knows it among the 7 wonders of the world.', 'You will be picked up from Delhi Railway Station/ Airport/ Hotel at 07:00 AM.Get driven to Agra, it will take 03- 04 hrs to reach. After reaching, guided sightseeing tour will get started it includes Taj Mahal,Agra Fort, Sikandra, Itmad- Ud- Daulah Tomb, Fatehpur Sikri. Driver will follow proper route to cover all major attractions. In evening by 06:00 PM Tour will come to an end and get driven back to Delhi. Reach Delhi and get transferredto Delhi Railway Station/ Airport/ Hotel. Services from Incredible Holiday end here.', 2, 4, 1, '411001', 1, 1, 2, 5000, '', '0000-00-00 00:00:00', '2015-09-17 13:34:49', NULL),
(7, 'Jaipur Guided Sightseeing Tour', 'known as the “Pink City” which is the capital and largest city of the Indian state of Rajasthan. The city was mainly founded on 18 November 1727 by Maharaja Sawai Jai Singh II; who was the ruler of Amber. The city of Jaipur is truly a well-planned city and is positioned in the semi-desert lands of Rajasthan. The city which once had been the capital of the royal maharajas is now the capital city of Rajasthan. Jaipur remind you of the Rajputs and the Royal families.', 'You will be picked up from Delhi Railway Station/ Airport/ Hotel at 06:00 AM.Get driven to Jaipur straight away visiting Amer Fort,City Palace,HawaMahal, JantarMantar, Nahargarh Fort. Driver will follow proper route to cover all major attractions. In evening by 06:00 PM Tour will get ended and you will be transferredback to Delhi. Services from Incredible Holiday end here.', 3, 3, 1, '411001', 1, 1, 2, 6000, '', '0000-00-00 00:00:00', '2015-09-17 13:34:49', NULL),
(8, 'Mumbai Guided Sightseeing Tour', 'Renowned as the "Gateway of India" - Mumbai, is a representation of what India as a country stands for "Unity in Diversity", as it embraces people from all cultures, religions & economic backgrounds to make it big in the city, more often known as the "City of Dreams". Home to one of the largest film industries in the world, "Bollywood" as it’s popularly known, is the hub of all things creative. Chhatrapati Shivaji Terminus (CST) depicts India''s Raj architecture and is spotted in the UNESCO World Heritage list. Mumbai is also known as every shopper''s paradise and is seen in its liveliest and colourful form around Crawford Market, Colaba Causeway, and Fashion Street. The crowning glory of this concrete city is the refreshing Chowpatty beach. An escape from the crowds includes an evening stroll along Marine Drive, or a boat trip out to Elephanta Caves.', 'You will be picked up from MumbaiHotel/ Railway Station/ Airport at 09:00 AM.Mumbai Guided sightseeing tour gets started it includes Gateway of India, Juhu & Marine drive Chowpatty Beaches, Mahalaxmitemple, Dhobi Ghat, Haji Ali, Prince of Wales Museum. Driver will follow proper route to cover all major attractions. In evening by 06:00 PMget transferred to Hotel/ Railway Station/ Airport. Services from Incredible Holiday end here.', 2, 2, 1, '411001', 1, 1, 1, 4000, '', '0000-00-00 00:00:00', '2015-09-17 13:34:49', NULL),
(9, 'Delhi - Neemrana full day excursion', 'Neemrana Fort-Palace became the third capital of the descendants of Prithviraj Chauhan III, who had fled Delhi in 1192 after he was vanquished in battle by Muhammad Gauri. Neemrana rulers, proud of lineage, continued to assert themselves, even under the British, as their kingdom suffered.', 'You will be picked up from Delhi Railway Station/ Airport/Hotel at 07:00 AM.Get driven to Neemrana, it will take 03- 04 hrs to reachthere. After reaching, you will meet with English speaking Guide. Major attractionswill be covered which includes Neemrana Fort, Baba Kedarnath Aashram.Driver will follow proper route to cover all major attractions. In evening by 06:00 PM Tour will get ended and get driven back to Delhi Railway Station/ Airport/ Hotel. Services from Incredible Holiday end here.', 1, 1, 1, '411001', 2, 1, 1, 3000, '', '0000-00-00 00:00:00', '2015-09-17 13:34:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tours_activity`
--

CREATE TABLE IF NOT EXISTS `tours_activity` (
  `tour_id` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  KEY `fk_tours_activity_tour_idx` (`tour_id`),
  KEY `fk_tours_activity_activities_idx` (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tours_activity`
--

INSERT INTO `tours_activity` (`tour_id`, `activity_id`) VALUES
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12);

-- --------------------------------------------------------

--
-- Table structure for table `tours_inclusion`
--

CREATE TABLE IF NOT EXISTS `tours_inclusion` (
  `tour_id` int(11) NOT NULL,
  `inclusion_id` int(11) NOT NULL,
  `is_included` tinyint(1) DEFAULT NULL,
  KEY `fk_tours_inclusion_tour_idx` (`tour_id`),
  KEY `fk_tours_inclusion_inclusion_idx` (`inclusion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tours_inclusion`
--

INSERT INTO `tours_inclusion` (`tour_id`, `inclusion_id`, `is_included`) VALUES
(3, 1, 1),
(3, 2, 1),
(3, 14, 0),
(3, 15, 0),
(3, 16, 0),
(4, 1, 1),
(4, 2, 1),
(4, 3, 1),
(4, 4, 1),
(4, 5, 1),
(4, 14, 0),
(4, 15, 0),
(4, 16, 0),
(5, 1, 1),
(5, 6, 1),
(5, 7, 1),
(5, 5, 1),
(5, 14, 0),
(5, 15, 0),
(5, 16, 0),
(6, 1, 1),
(6, 2, 0),
(6, 5, 1),
(6, 8, 1),
(6, 9, 1),
(6, 10, 1),
(6, 11, 1),
(6, 17, 0),
(6, 18, 0),
(6, 19, 0),
(7, 1, 1),
(7, 2, 1),
(7, 5, 1),
(7, 12, 1),
(7, 8, 1),
(7, 10, 1),
(7, 11, 1),
(7, 17, 0),
(7, 18, 0),
(7, 19, 0),
(8, 1, 1),
(8, 2, 1),
(8, 5, 1),
(8, 8, 1),
(8, 10, 1),
(8, 11, 1),
(8, 17, 0),
(8, 18, 0),
(8, 19, 0),
(9, 1, 1),
(9, 2, 1),
(9, 5, 1),
(9, 13, 1),
(9, 8, 1),
(9, 10, 1),
(9, 11, 1),
(9, 17, 0),
(9, 18, 0),
(9, 19, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tours_notes`
--

CREATE TABLE IF NOT EXISTS `tours_notes` (
  `tour_id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  KEY `fk_tours_notes_tour_idx` (`tour_id`),
  KEY `fk_tours_notes_notes_idx` (`note_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tours_notes`
--

INSERT INTO `tours_notes` (`tour_id`, `note_id`) VALUES
(3, 1),
(3, 2),
(4, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tour_type`
--

CREATE TABLE IF NOT EXISTS `tour_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tour_type`
--

INSERT INTO `tour_type` (`id`, `name`, `description`) VALUES
(1, 'Day Tours', ''),
(2, 'International Tours', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `middle_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `gender` char(1) NOT NULL,
  `dob` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `email` varchar(50) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `skype_id` varchar(30) NOT NULL,
  `hangout_id` varchar(30) NOT NULL,
  `linkedin_id` varchar(30) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_user_contacts_idx` (`contact_id`),
  KEY `fk_user_address_idx` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `user`
--


-- --------------------------------------------------------

--
-- Table structure for table `user_auth`
--

CREATE TABLE IF NOT EXISTS `user_auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_auth_users_idx` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `user_auth`
--


-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE IF NOT EXISTS `user_role` (
  `employee_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  KEY `fk_user_role_employees_idx` (`employee_id`),
  KEY `fk_user_role_roles_idx` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--


--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `fk_address_cities` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_address_countries` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_address_states` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `fk_contact_type` FOREIGN KEY (`type_id`) REFERENCES `contact_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `query`
--
ALTER TABLE `query`
  ADD CONSTRAINT `fk_query_countries` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_query_tours` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `role_privilage`
--
ALTER TABLE `role_privilage`
  ADD CONSTRAINT `role_privilage_privilages` FOREIGN KEY (`privilage_id`) REFERENCES `privilage` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `role_privilage_roles` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tours`
--
ALTER TABLE `tours`
  ADD CONSTRAINT `fk_tours_cities` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_countries` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_currencies` FOREIGN KEY (`currency_id`) REFERENCES `currency_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_durations` FOREIGN KEY (`duration_id`) REFERENCES `duration_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_states` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_types` FOREIGN KEY (`type_id`) REFERENCES `tour_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tours_activity`
--
ALTER TABLE `tours_activity`
  ADD CONSTRAINT `fk_tours_activity_activities` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_activity_tour` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tours_inclusion`
--
ALTER TABLE `tours_inclusion`
  ADD CONSTRAINT `fk_tours_inclusion_inclusion` FOREIGN KEY (`inclusion_id`) REFERENCES `inclusion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_inclusion_tour` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tours_notes`
--
ALTER TABLE `tours_notes`
  ADD CONSTRAINT `fk_tours_notes_note` FOREIGN KEY (`note_id`) REFERENCES `note` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tours_notes_tour` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_contacts` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_auth`
--
ALTER TABLE `user_auth`
  ADD CONSTRAINT `fk_user_auth_users` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `fk_user_role_employees` FOREIGN KEY (`employee_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_role_roles` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
