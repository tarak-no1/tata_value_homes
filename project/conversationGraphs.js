/**
 * Created by samba on 25/04/17.
 */
let fs = require("fs");
const questions = JSON.parse(fs.readFileSync("./json/question_flow.json"));
const conversation_rules = JSON.parse(fs.readFileSync("./json/conversation_graph.json"));

const ben_conversations = 
{
	"women_dresses" : JSON.parse(fs.readFileSync("./product_lines/dresses_conversation.json")),
	"women_jeans" : JSON.parse(fs.readFileSync("./product_lines/jeans_conversation.json")),
	"women_kurta" : JSON.parse(fs.readFileSync("./product_lines/kurta_conversation.json")),
	"women_heels" : JSON.parse(fs.readFileSync("./product_lines/heels_conversation.json")),
	"women_handbags" : JSON.parse(fs.readFileSync("./product_lines/handbags_conversation.json")),
	"women_jackets" : JSON.parse(fs.readFileSync("./product_lines/jackets_conversation.json")),
	"women_flats" : JSON.parse(fs.readFileSync("./product_lines/flats_conversation.json")),
	"women_tops" : JSON.parse(fs.readFileSync("./product_lines/tops_conversation.json")),
	"women_tshirts" : JSON.parse(fs.readFileSync("./product_lines/tshirts_conversation.json")),
	"women_shirts" : JSON.parse(fs.readFileSync("./product_lines/shirts_conversation.json")),
	"women_shorts" : JSON.parse(fs.readFileSync("./product_lines/shorts_conversation.json")),
	"women_skirts" : JSON.parse(fs.readFileSync("./product_lines/skirts_conversation.json")),
	"women_jeggings" : JSON.parse(fs.readFileSync("./product_lines/jeggings_conversation.json")),
	"women_jumpsuits" : JSON.parse(fs.readFileSync("./product_lines/jumpsuits_conversation.json")),
	"women_capris" : JSON.parse(fs.readFileSync("./product_lines/capris_conversation.json")),
	"women_sweaters" : JSON.parse(fs.readFileSync("./product_lines/sweaters_conversation.json")),
	"women_sweatshirts" : JSON.parse(fs.readFileSync("./product_lines/sweatshirts_conversation.json")),
	"women_blazers" : JSON.parse(fs.readFileSync("./product_lines/blazers_conversation.json")),
	"women_trousers" : JSON.parse(fs.readFileSync("./product_lines/trousers_conversation.json")),
	"women_casual_shoes" : JSON.parse(fs.readFileSync("./product_lines/casual_shoes_conversation.json"))
};
const ben_questions = 
{
	"women_dresses" : JSON.parse(fs.readFileSync("./product_lines/dresses_questions.json")),
	"women_jeans" : JSON.parse(fs.readFileSync("./product_lines/jeans_questions.json")),
	"women_kurta" : JSON.parse(fs.readFileSync("./product_lines/kurta_questions.json")),
	"women_heels" : JSON.parse(fs.readFileSync("./product_lines/heels_questions.json")),
	"women_handbags" : JSON.parse(fs.readFileSync("./product_lines/handbags_questions.json")),
	"women_jackets" : JSON.parse(fs.readFileSync("./product_lines/jackets_questions.json")),
	"women_flats" : JSON.parse(fs.readFileSync("./product_lines/flats_questions.json")),
	"women_tops" : JSON.parse(fs.readFileSync("./product_lines/tops_questions.json")),
	"women_tshirts" : JSON.parse(fs.readFileSync("./product_lines/tshirts_questions.json")),
	"women_shirts" : JSON.parse(fs.readFileSync("./product_lines/shirts_questions.json")),
	"women_shorts" : JSON.parse(fs.readFileSync("./product_lines/shorts_questions.json")),
	"women_skirts" : JSON.parse(fs.readFileSync("./product_lines/skirts_questions.json")),
	"women_jeggings" : JSON.parse(fs.readFileSync("./product_lines/jeggings_questions.json")),
	"women_jumpsuits" : JSON.parse(fs.readFileSync("./product_lines/jumpsuits_questions.json")),
	"women_capris" : JSON.parse(fs.readFileSync("./product_lines/capris_questions.json")),
	"women_sweaters" : JSON.parse(fs.readFileSync("./product_lines/sweaters_questions.json")),
	"women_sweatshirts" : JSON.parse(fs.readFileSync("./product_lines/sweatshirts_questions.json")),
	"women_blazers" : JSON.parse(fs.readFileSync("./product_lines/blazers_questions.json")),
	"women_trousers" : JSON.parse(fs.readFileSync("./product_lines/trousers_questions.json")),
	"women_casual_shoes" : JSON.parse(fs.readFileSync("./product_lines/casual_shoes_questions.json"))
};
const ben_flow = 
{
	"women_dresses" : JSON.parse(fs.readFileSync("./product_lines/dresses_flow.json")),
	"women_jeans" : JSON.parse(fs.readFileSync("./product_lines/jeans_flow.json")),
	"women_kurta" : JSON.parse(fs.readFileSync("./product_lines/kurta_flow.json")),
	"women_heels" : JSON.parse(fs.readFileSync("./product_lines/heels_flow.json")),
	"women_handbags" : JSON.parse(fs.readFileSync("./product_lines/handbags_flow.json")),
	"women_jackets" : JSON.parse(fs.readFileSync("./product_lines/jackets_flow.json")),
	"women_flats" : JSON.parse(fs.readFileSync("./product_lines/flats_flow.json")),
	"women_tops" : JSON.parse(fs.readFileSync("./product_lines/tops_flow.json")),
	"women_tshirts" : JSON.parse(fs.readFileSync("./product_lines/tshirts_flow.json")),
	"women_shirts" : JSON.parse(fs.readFileSync("./product_lines/shirts_flow.json")),
	"women_shorts" : JSON.parse(fs.readFileSync("./product_lines/shorts_flow.json")),
	"women_skirts" : JSON.parse(fs.readFileSync("./product_lines/skirts_flow.json")),
	"women_jeggings" : JSON.parse(fs.readFileSync("./product_lines/jeggings_flow.json")),
	"women_jumpsuits" : JSON.parse(fs.readFileSync("./product_lines/jumpsuits_flow.json")),
	"women_capris" : JSON.parse(fs.readFileSync("./product_lines/capris_flow.json")),
	"women_sweaters" : JSON.parse(fs.readFileSync("./product_lines/sweaters_flow.json")),
	"women_sweatshirts" : JSON.parse(fs.readFileSync("./product_lines/sweatshirts_flow.json")),
	"women_blazers" : JSON.parse(fs.readFileSync("./product_lines/blazers_flow.json")),
	"women_trousers" : JSON.parse(fs.readFileSync("./product_lines/trousers_flow.json")),
	"women_casual_shoes" : JSON.parse(fs.readFileSync("./product_lines/casual_shoes_flow.json"))
};

const get_numbers = {
  "women_dresses": {
    "office": "1",
    "beach": "2",
    "casual outing": "3",
    "wedding": "4",
    "party": "5",
    "formal office wear": "6",
    "semi-formal office wear": "7",
    "casual office wear": "8",
    "powerful_formal_color": "31",
    "feminine_formal_color": "32",
    "bright_formal_color": "33",
    "color_formal_none": "34",
    "powerful_color": "35",
    "feminine_color": "36",
    "bright_color": "37",
    "relax_color": "38",
    "colorful": "39",
    "color_casual_none": "40",
    "bold": "41",
    "modest": "42",
    "intermediate": "43",
    "bold_none": "44",
    "family": "9",
    "friends": "10",
    "hot": "11",
    "cold": "12",
    "lunch/brunch/dinner/movie": "13",
    "daily wear/college": "14",
    "casual_general": "15",
    "other events": "16",
    "season_yes": "17",
    "season_no": "18",
    "simple": "19",
    "heavy": "20",
    "indoor": "21",
    "outdoor": "22",
    "cocktail/office party": "23",
    "clubbing/house party": "24",
    "college party": "25",
    "birthday/anniversary": "26",
    "party_general": "27",
    "day": "29",
    "night": "30",
    "pool_party_pool_party": "2",
    "casual_office": "8",
    "summer": "11",
    "winter": "12",
    "lunch": "13",
    "brunch_brunch": "13",
    "dinner": "13",
    "movie_movie": "13",
    "college_college": "14",
    "simple_wedding": "19",
    "heavy_wedding": "20",
    "cocktail_events_office_circle": "23",
    "theme_party_house": "24",
    "anniversary_dinner_partner": "26"
  },
  "women_tops": {
    "special occasion wear": "1",
    "office wear": "2",
    "casual wear": "3",
    "party wear": "4",
    "date": "5",
    "birthday/anniversary": "6",
    "festival": "7",
    "others": "8",
    "formal": "9",
    "semi_formal": "10",
    "casual office wear": "11",
    "lunch_type": "12",
    "daily_wear_type": "13",
    "beach": "14",
    "holidays": "15",
    "other_events_casual": "16",
    "casual_general": "17",
    "college party": "18",
    "cocktail/office party": "19",
    "party_general": "20",
    "clubbing": "21",
    "house party": "22",
    "other_events_party": "23",
    "indoor": "24",
    "outdoor": "25",
    "going_yes": "26",
    "going_no": "27",
    "simple": "28",
    "heavy": "29",
    "hot": "30",
    "cold": "31",
    "day": "32",
    "night": "33",
    "powerful_formal_color": "36",
    "feminine_formal_color": "37",
    "bright_formal_color": "38",
    "color_formal_none": "39",
    "powerful_color": "40",
    "feminine_color": "41",
    "bright_color": "42",
    "relax_color": "43",
    "colorful": "44",
    "color_casual_none": "45",
    "bold": "46",
    "modest": "47",
    "intermediate": "48",
    "bold_none": "49",
    "family": "34",
    "friends": "35",
    "special_occasion": "1",
    "date_night_date_night": "5",
    "anniversary_dinner_partner": "6",
    "concerts_concerts": "8",
    "casual_office": "11",
    "lunch": "12",
    "brunch_brunch": "12",
    "dinner": "12",
    "movie_movie": "12",
    "college_college": "13",
    "pool_party_pool_party": "14",
    "vacation": "15",
    "cocktail_events_office_circle": "19",
    "theme_party_house": "22",
    "simple_wedding": "28",
    "heavy_wedding": "29",
    "summer": "30",
    "winter": "31"
  },
  "women_tshirts": {
    "casual wear": "1",
    "sports wear": "2",
    "office_wear": "3",
    "party wear": "4",
    "lunch_type": "5",
    "daily_wear_type": "6",
    "holidays": "7",
    "casual_general": "8",
    "other_events_casual": "9",
    "indoor sports (gym/yoga/aerobics etc.)": "10",
    "outdoor sports (trekking, cycling etc.)": "11",
    "indoor": "12",
    "outdoor": "13",
    "hot": "14",
    "cold": "15",
    "day": "16",
    "night": "17",
    "bold": "23",
    "modest": "24",
    "intermediate": "25",
    "bold_none": "26",
    "powerful_color": "27",
    "feminine_color": "28",
    "bright_color": "29",
    "relax_color": "30",
    "colorful": "31",
    "color_casual_none": "32",
    "clubbing/house party": "18",
    "college party": "19",
    "birthday party/anniversary party": "20",
    "party_general": "21",
    "other_events_party": "22",
    "workout": "2",
    "lunch": "5",
    "brunch_brunch": "5",
    "dinner": "5",
    "movie_movie": "5",
    "college_college": "6",
    "vacation": "7",
    "gym": "10",
    "yoga_class_yoga_class": "10",
    "dance_class_aerobics": "10",
    "trekking_trekking": "11",
    "mountain_climbing": "11",
    "swimming": "11",
    "cycling": "11",
    "summer": "14",
    "winter": "15",
    "theme_party_house": "18",
    "anniversary_dinner_partner": "20"
  },
  "women_kurta": {
    "special occasion": "1",
    "office wear": "2",
    "casual wear": "3",
    "date": "4",
    "birthday/anniversary": "5",
    "festival": "6",
    "cocktail party/office party": "7",
    "wedding": "8",
    "others": "9",
    "lunch/brunch/dinner/movie": "10",
    "daily wear/college": "11",
    "holidays": "12",
    "casual_general": "13",
    "other_events_casual": "14",
    "formal": "15",
    "semi_formal": "16",
    "casual office wear": "17",
    "indoor": "18",
    "outdoor": "19",
    "simple": "20",
    "heavy": "21",
    "hot": "22",
    "cold": "23",
    "day": "24",
    "night": "25",
    "powerful_formal_color": "26",
    "feminine_formal_color": "27",
    "bright_formal_color": "28",
    "color_formal_none": "29",
    "powerful_color": "30",
    "feminine_color": "31",
    "bright_color": "32",
    "relax_color": "33",
    "colorful": "34",
    "color_casual_none": "35",
    "bold": "36",
    "modest": "37",
    "intermediate": "38",
    "bold_none": "39",
    "special_occasion": "1",
    "date_night_date_night": "4",
    "anniversary_dinner_partner": "5",
    "cocktail_events_office_circle": "7",
    "concerts_concerts": "9",
    "lunch": "10",
    "brunch_brunch": "10",
    "dinner": "10",
    "movie_movie": "10",
    "college_college": "11",
    "vacation": "12",
    "casual_office": "17",
    "simple_wedding": "20",
    "heavy_wedding": "21",
    "summer": "22",
    "winter": "23"
  },
  "women_jeans": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "semi-formal": "4",
    "casual office wear": "5",
    "birthday/anniversary/date": "6",
    "cocktail/office party": "7",
    "clubbing/house party": "8",
    "party_general": "9",
    "other_events_party": "10",
    "blacks_color": "11",
    "blues_color": "12",
    "light_colors": "13",
    "color_casual_none": "14",
    "colorful": "15",
    "bold": "16",
    "modest": "17",
    "intermediate": "18",
    "bold_none": "19",
    "casual_office": "5",
    "anniversary_dinner_partner": "6",
    "date_night_date_night": "6",
    "cocktail_events_office_circle": "7",
    "theme_party_house": "8"
  },
  "women_jackets": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "workout wear": "4",
    "holidays": "5",
    "semi-formal": "6",
    "casual office wear": "7",
    "lunch/brunch/dinner/movie": "8",
    "daily wear/college": "9",
    "casual_general": "10",
    "other_events_casual": "11",
    "cocktail/office party": "12",
    "birthday/anniversary/date": "13",
    "clubbing/house party": "14",
    "party_general": "15",
    "other_events_party": "16",
    "not_cold": "17",
    "mild_cold": "18",
    "moderate_cold": "19",
    "extreme_cold": "20",
    "windy": "21",
    "rainy": "22",
    "windy_nor_rainy": "23",
    "trip_no": "24",
    "outdoor activities": "25",
    "powerful_color": "26",
    "feminine_color": "27",
    "bright_color": "28",
    "relax_color": "29",
    "colorful": "30",
    "color_casual_none": "31",
    "workout": "4",
    "vacation": "5",
    "casual_office": "7",
    "lunch": "8",
    "brunch_brunch": "8",
    "dinner": "8",
    "movie_movie": "8",
    "college_college": "9",
    "cocktail_events_office_circle": "12",
    "anniversary_dinner_partner": "13",
    "date_night_date_night": "13",
    "theme_party_house": "14",
    "snow_vacation": "20",
    "monsoon": "22"
  },
  "women_handbags": {
    "casual office wear": "19",
    "party wear": "2",
    "office wear": "3",
    "lunch/brunch/dinner/movie": "4",
    "daily use/college": "5",
    "holidays": "6",
    "beach use": "7",
    "other_events_casual": "8",
    "casual_general": "9",
    "cocktail/office party": "10",
    "clubbing/house party": "11",
    "college party": "12",
    "party_general": "13",
    "birthday/anniversary": "14",
    "date": "15",
    "festivals/weddings": "16",
    "other_events_party": "17",
    "formal": "18",
    "roomy": "20",
    "essential": "21",
    "non_functional": "22",
    "functional_good": "23",
    "handbag_none": "24",
    "colorful": "25",
    "bright_color": "26",
    "elegant_color": "27",
    "subtle_color": "28",
    "color_casual_none": "29",
    "casual wear": "1",
    "special_occasion": "2",
    "office_wear": "3",
    "lunch": "4",
    "brunch_brunch": "4",
    "dinner": "4",
    "movie_movie": "4",
    "college_college": "5",
    "vacation": "6",
    "cocktail_events_office_circle": "10",
    "theme_party_house": "11",
    "anniversary_dinner_partner": "14",
    "date_night_date_night": "15",
    "wedding": "16",
    "casual_office": "19"
  },
  "women_flats": {
    "casual office wear": "20",
    "party wear": "2",
    "office wear": "3",
    "special occasion wear": "4",
    "lunch/brunch/dinner/movie/holidays": "5",
    "daily wear/college": "6",
    "beach wear": "7",
    "casual_general": "8",
    "other_events_casual": "9",
    "cocktail/office party": "10",
    "clubbing/house party": "11",
    "college party": "12",
    "party_general": "13",
    "birthday/anniversary": "14",
    "other_events_party": "15",
    "date": "16",
    "festivals/weddings": "17",
    "others": "18",
    "formal": "19",
    "dressy_foot": "21",
    "cute_foot": "22",
    "simple_foot": "23",
    "flats_none": "24",
    "colorful": "25",
    "bright_color": "26",
    "elegant_color": "27",
    "subtle_color": "28",
    "color_casual_none": "29",
    "casual wear": "1",
    "office_wear": "3",
    "special_occasion": "4",
    "lunch": "5",
    "brunch_brunch": "5",
    "dinner": "5",
    "movie_movie": "5",
    "vacation": "5",
    "college_college": "6",
    "cocktail_events_office_circle": "10",
    "theme_party_house": "11",
    "anniversary_dinner_partner": "14",
    "date_night_date_night": "16",
    "wedding": "17",
    "concerts_concerts": "18",
    "casual_office": "20"
  },
  "women_heels": {
    "casual office wear": "20",
    "party wear": "2",
    "office wear": "3",
    "special occasion wear": "4",
    "lunch/brunch/dinner/movie/holidays": "5",
    "daily wear/college": "6",
    "beach wear": "7",
    "casual_general": "8",
    "other_events_casual": "9",
    "cocktail/office party": "10",
    "clubbing/house party": "11",
    "college party": "12",
    "party_general": "13",
    "birthday/anniversary": "14",
    "other_events_party": "15",
    "date": "16",
    "festivals/weddings": "17",
    "others": "18",
    "formal": "19",
    "dressy_foot": "21",
    "cute_foot": "22",
    "simple_foot": "23",
    "heels_none": "24",
    "colorful": "25",
    "bright_color": "26",
    "elegant_color": "27",
    "subtle_color": "28",
    "color_casual_none": "29",
    "casual wear": "1",
    "office_wear": "3",
    "special_occasion": "4",
    "lunch": "5",
    "brunch_brunch": "5",
    "dinner": "5",
    "movie_movie": "5",
    "vacation": "5",
    "college_college": "6",
    "cocktail_events_office_circle": "10",
    "theme_party_house": "11",
    "anniversary_dinner_partner": "14",
    "date_night_date_night": "16",
    "wedding": "17",
    "concerts_concerts": "18",
    "casual_office": "20"
  },
  "women_casual_shoes": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "semi-formal": "4",
    "casual office wear": "5",
    "lunch/brunch/dinner/movie/holidays": "6",
    "beach wear": "7",
    "daily wear/college": "8",
    "casual_general": "9",
    "other_events_casual": "10",
    "birthday/anniversary/date": "11",
    "clubbing/house party": "12",
    "party_general": "13",
    "other_events_party": "14",
    "winter": "15",
    "all_season": "16",
    "colorful": "17",
    "bright_color": "18",
    "elegant_color": "19",
    "subtle_color": "20",
    "color_casual_none": "21",
    "dressy_foot": "22",
    "cute_foot": "23",
    "simple_foot": "24",
    "shoes_none": "25",
    "casual_office": "5",
    "lunch": "6",
    "brunch_brunch": "6",
    "dinner": "6",
    "movie_movie": "6",
    "vacation": "6",
    "college_college": "8",
    "anniversary_dinner_partner": "11",
    "date_night_date_night": "11",
    "theme_party_house": "12"
  },
  "women_shirts": {
    "office wear": "1",
    "casual wear": "2",
    "formal": "3",
    "semi-formal": "4",
    "casual office wear": "5",
    "meeting_yes": "6",
    "meeting_no": "7",
    "lunch/brunch/dinner/movie": "8",
    "daily wear/college": "9",
    "holiday trips": "10",
    "beach": "11",
    "other_events_casual": "12",
    "casual_general": "13",
    "powerful_formal_color": "14",
    "feminine_formal_color": "15",
    "bright_formal_color": "16",
    "color_formal_none": "17",
    "powerful_color": "18",
    "feminine_color": "19",
    "bright_color": "20",
    "relax_color": "21",
    "colorful": "22",
    "color_casual_none": "23",
    "bold": "24",
    "modest": "25",
    "intermediate": "26",
    "bold_none": "27",
    "casual_office": "5",
    "lunch": "8",
    "brunch_brunch": "8",
    "dinner": "8",
    "movie_movie": "8",
    "college_college": "9",
    "vacation": "10"
  },
  "women_skirts": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "formal": "4",
    "semi_formal": "5",
    "casual office wear": "6",
    "lunch/brunch/dinner/movie": "7",
    "daily wear/college": "8",
    "beach": "9",
    "holiday trips": "10",
    "date": "11",
    "casual_general": "12",
    "others_casual": "13",
    "cocktail/office party": "14",
    "clubbing/house party": "15",
    "college party": "16",
    "birthday/anniversary": "17",
    "pool party": "18",
    "event_none": "19",
    "others_party": "20",
    "family": "21",
    "friends": "22",
    "indoor": "23",
    "outdoor": "24",
    "day": "25",
    "night": "26",
    "hot": "27",
    "cold": "28",
    "powerful_formal_color": "29",
    "feminine_formal_color": "30",
    "bright_formal_color": "31",
    "color_formal_none": "32",
    "powerful_color": "33",
    "feminine_color": "34",
    "bright_color": "35",
    "relax_color": "36",
    "colorful": "37",
    "color_casual_none": "38",
    "bold": "39",
    "modest": "40",
    "intermediate": "41",
    "bold_none": "42",
    "casual_office": "6",
    "lunch": "7",
    "brunch_brunch": "7",
    "dinner": "7",
    "movie_movie": "7",
    "college_college": "8",
    "vacation": "10",
    "date_night_date_night": "11",
    "cocktail_events_office_circle": "14",
    "theme_party_house": "15",
    "college_party": "16",
    "anniversary_dinner_partner": "17",
    "pool_party_pool_party": "18"
  },
  "women_trousers": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "formal": "4",
    "semi-formal": "5",
    "casual office wear": "6",
    "beach": "7",
    "lunch/brunch/dinner/movie": "8",
    "daily wear/college": "9",
    "holiday trips": "10",
    "casual_general": "11",
    "others_casual": "12",
    "office party": "13",
    "college party": "14",
    "birthday/anniversary": "15",
    "event_none": "16",
    "others_party": "17",
    "indoor": "18",
    "outdoor": "19",
    "day": "20",
    "night": "21",
    "hot": "22",
    "cold": "23",
    "powerful_formal_color": "24",
    "feminine_formal_color": "25",
    "bright_formal_color": "26",
    "color_formal_none": "27",
    "powerful_color": "28",
    "feminine_color": "29",
    "bright_color": "30",
    "relax_color": "31",
    "colorful": "32",
    "color_casual_none": "33",
    "casual_office": "6",
    "lunch": "8",
    "brunch_brunch": "8",
    "dinner": "8",
    "movie_movie": "8",
    "college_college": "9",
    "vacation": "10",
    "cocktail_events_office_circle": "13",
    "college_party": "14",
    "anniversary_dinner_partner": "15",
    "summer": "22",
    "winter": "23"
  },
  "women_shorts": {
    "casual wear": "1",
    "party wear": "2",
    "sports wear": "3",
    "beach": "4",
    "lunch/brunch/dinner/movie": "5",
    "daily wear/college": "6",
    "holiday trips": "7",
    "casual_general": "8",
    "others_casual": "9",
    "pool party": "10",
    "clubbing/house party": "11",
    "college party": "12",
    "event_none": "13",
    "others_party": "14",
    "indoor": "15",
    "outdoor": "16",
    "day": "17",
    "night": "18",
    "powerful_color": "19",
    "feminine_color": "20",
    "bright_color": "21",
    "relax_color": "22",
    "colorful": "23",
    "color_casual_none": "24",
    "bold": "25",
    "intermediate": "26",
    "bold_none": "27",
    "workout": "3",
    "lunch": "5",
    "brunch_brunch": "5",
    "dinner": "5",
    "movie_movie": "5",
    "college_college": "6",
    "vacation": "7",
    "pool_party_pool_party": "10",
    "theme_party_house": "11",
    "college_party": "12"
  },
  "women_sweatshirts": {
    "active/sports wear": "1",
    "daily wear": "2",
    "college wear": "3",
    "lunch/brunch/movie": "4",
    "others": "5",
    "powerful_color": "6",
    "feminine_color": "7",
    "bright_color": "8",
    "relax_color": "9",
    "colorful": "10",
    "color_casual_none": "11",
    "bold": "12",
    "modest": "13",
    "bold_none": "14",
    "workout": "1",
    "college_college": "3",
    "lunch": "4",
    "brunch_brunch": "4",
    "movie_movie": "4",
    "concerts_concerts": "5"
  },
  "women_sweaters": {
    "office wear": "1",
    "daily wear casual": "2",
    "college wear": "3",
    "others": "4",
    "holiday trips": "5",
    "special events": "6",
    "powerful_color": "7",
    "feminine_color": "8",
    "bright_color": "9",
    "relax_color": "10",
    "colorful": "11",
    "color_casual_none": "12",
    "Casual Wear": "2",
    "college_college": "3",
    "concerts_concerts": "4",
    "vacation": "5"
  },
  "women_capris": {
    "casual wear": "1",
    "beach": "2",
    "lunch/brunch/dinner/movie": "3",
    "daily wear/college": "4",
    "holiday trips": "5",
    "casual_general": "6",
    "others_casual": "7",
    "day": "8",
    "night": "9",
    "powerful_color": "10",
    "feminine_color": "11",
    "bright_color": "12",
    "relax_color": "13",
    "colorful": "14",
    "color_casual_none": "15",
    "bold": "16",
    "intermediate": "17",
    "bold_none": "18",
    "pool_party_pool_party": "2",
    "lunch": "3",
    "brunch_brunch": "3",
    "dinner": "3",
    "movie_movie": "3",
    "college_college": "4",
    "vacation": "5"
  },
  "women_jeggings": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "lunch/brunch/dinner/movie": "4",
    "daily wear/college": "5",
    "holiday trips": "6",
    "other_events_casual": "7",
    "casual_general": "8",
    "clubbing/house party": "9",
    "college party": "10",
    "birthday/anniversary": "11",
    "event_none": "12",
    "others_party": "13",
    "powerful_color": "14",
    "feminine_color": "15",
    "bright_color": "16",
    "relax_color": "17",
    "colorful": "18",
    "color_casual_none": "19",
    "lunch": "4",
    "brunch_brunch": "4",
    "dinner": "4",
    "movie_movie": "4",
    "college_college": "5",
    "vacation": "6",
    "theme_party_house": "9",
    "college_party": "10",
    "anniversary_dinner_partner": "11"
  },
  "women_jumpsuits": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "lunch/brunch/dinner/movie": "4",
    "beach wear": "5",
    "daily wear/college": "6",
    "holiday trips": "7",
    "date": "8",
    "casual_general": "9",
    "others_casual": "10",
    "season_yes": "11",
    "season_no": "12",
    "clubbing/house party": "13",
    "college party": "14",
    "birthday/anniversary": "15",
    "event_none": "16",
    "others_party": "17",
    "indoor": "18",
    "outdoor": "19",
    "day": "20",
    "night": "21",
    "powerful_color": "22",
    "feminine_color": "23",
    "bright_color": "24",
    "relax_color": "25",
    "colorful": "26",
    "color_casual_none": "27",
    "lunch": "4",
    "brunch_brunch": "4",
    "dinner": "4",
    "movie_movie": "4",
    "college_college": "6",
    "vacation": "7",
    "date_night_date_night": "8",
    "theme_party_house": "13",
    "college_party": "14",
    "anniversary_dinner_partner": "15"
  },
  "women_blazers": {
    "office wear": "1",
    "casual wear": "2",
    "party wear": "3",
    "semi-formal": "4",
    "casual office wear": "5",
    "cocktail/office party": "6",
    "birthday/anniversary/date": "7",
    "clubbing/house party": "8",
    "party_general": "9",
    "other_events_party": "10",
    "hot": "11",
    "cold": "12",
    "powerful_color": "13",
    "feminine_color": "14",
    "bright_color": "15",
    "relax_color": "16",
    "colorful": "17",
    "color_casual_none": "18",
    "casual_office": "5",
    "cocktail_events_office_circle": "6",
    "anniversary_dinner_partner": "7",
    "date_night_date_night": "7",
    "theme_party_house": "8",
    "summer": "11",
    "winter": "12"
  }
};
module.exports = {
    questions : questions,
    conversation_rules : conversation_rules,
    ben_conversations : ben_conversations,
    ben_questions : ben_questions,
    ben_flow : ben_flow,
    get_numbers : get_numbers
}