import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentAge extends Schema.Component {
  collectionName: 'components_component_ages';
  info: {
    displayName: 'Age preference';
    description: '';
  };
  attributes: {
    From: Attribute.Integer;
    To: Attribute.Integer;
  };
}

export interface ComponentComments extends Schema.Component {
  collectionName: 'components_component_comments';
  info: {
    displayName: 'comments';
    icon: 'message';
  };
  attributes: {
    member_id: Attribute.Relation<
      'component.comments',
      'oneToOne',
      'api::member.member'
    >;
    content: Attribute.Text;
    create_at: Attribute.DateTime;
  };
}

export interface ComponentHeightPreference extends Schema.Component {
  collectionName: 'components_component_height_preferences';
  info: {
    displayName: 'height preference';
    description: '';
  };
  attributes: {
    From: Attribute.Integer;
    To: Attribute.Integer;
  };
}

export interface ComponentLocation extends Schema.Component {
  collectionName: 'components_component_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    country: Attribute.String;
    nationality: Attribute.String;
    city: Attribute.String;
    latitude: Attribute.Float;
    longitude: Attribute.Float;
    region: Attribute.String;
  };
}

export interface ComponentPartnerEducationPreference extends Schema.Component {
  collectionName: 'components_component_partner_education_preferences';
  info: {
    displayName: 'Partner Education Preference';
    description: '';
  };
  attributes: {
    education: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Any',
          'Art Education',
          'Art History',
          'Art Therapy',
          'Associate of Applied Science (AAS)',
          'Associate of Arts (AA)',
          'Associate of Science (AS)',
          "Associate's Degree",
          'Bachelor of Arts (BA)',
          'Bachelor of Business Administration (BBA)',
          'Bachelor of Education (BEd)',
          'Bachelor of Engineering (BEng)',
          'Bachelor of Fine Arts (BFA)',
          'Bachelor of Laws (LLB)',
          'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
          'Bachelor of Science (BS)',
          "Bachelor's Degree",
          'Certified Information Systems Security Professional (CISSP)',
          'Certified Public Accountant (CPA)',
          'Culinary Arts Certificate',
          'Dance',
          'Digital Arts',
          'Diploma in Accounting',
          'Diploma in Business Administration',
          'Diploma in Computer Science',
          'Diploma in Early Childhood Education',
          'Diploma in Engineering',
          'Diploma in Graphic Design',
          'Diploma in Hospitality Management',
          'Diploma in Information Technology',
          'Diploma in Nursing',
          'Diploma in Project Management',
          'Diploma in Public Relations',
          'Diploma in Software Development',
          'Doctor of Business Administration (DBA)',
          'Doctor of Dental Surgery (DDS)',
          'Doctor of Education (EdD)',
          'Doctor of Law (JD)',
          'Doctor of Medicine (MD)',
          'Doctor of Philosophy (PhD)',
          'Doctor of Public Health (DrPH)',
          'Doctor of Veterinary Medicine (DVM)',
          'Doctorate',
          'Drawing',
          'Electrician Certificate',
          'Fashion Design',
          'Film Studies',
          'Graphic Design',
          'High School Diploma',
          'Illustration',
          'Information Technology Certificate',
          'Master of Arts (MA)',
          'Master of Business Administration (MBA)',
          'Master of Education (MEd)',
          'Master of Engineering (MEng)',
          'Master of Fine Arts (MFA)',
          'Master of Laws (LLM)',
          'Master of Public Health (MPH)',
          'Master of Science (MS)',
          'Master of Social Work (MSW)',
          'Master of Technology (MTech)',
          "Master's Degree",
          'Medical Assistant Certificate',
          'Middle School',
          'Music',
          'No Formal Education',
          'Online Courses (MOOCs)',
          'Painting',
          'Photography',
          'Primary School',
          'Professional Certification',
          'Professional Development Courses',
          'Project Management Professional (PMP)',
          'Sculpture',
          'Secondary School Diploma',
          'Six Sigma Certification',
          'Some College',
          'Technical/Vocational Certificate',
          'Theater Arts',
          'Visual Arts',
          'Welding Certificate'
        ]
      >;
    profession: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Any',
          'Accountant',
          'Actor',
          'Actuary',
          'Acupuncturist',
          'Administrator',
          'Advertising Specialist',
          'Agricultural Engineer',
          'Agricultural Scientist',
          'Air Traffic Controller',
          'Aircraft Mechanic',
          'Airline Pilot',
          'Ambassador',
          'Anesthesiologist',
          'Animator',
          'Anthropologist',
          'Archaeologist',
          'Architect',
          'Archivist',
          'Art Director',
          'Art Restorer',
          'Artist',
          'Astronomer',
          'Athletic Trainer',
          'Audiologist',
          'Author',
          'Automotive Technician',
          'Baker',
          'Banker',
          'Bartender',
          'Biochemist',
          'Biologist',
          'Biomedical Engineer',
          'Blacksmith',
          'Botanist',
          'Bricklayer',
          'Broadcaster',
          'Broker',
          'Bus Driver',
          'Butcher',
          'Carpenter',
          'Cartographer',
          'Cashier',
          'Chef',
          'Chemical Engineer',
          'Chemist',
          'Chiropractor',
          'Civil Engineer',
          'Clergy',
          'Clinical Psychologist',
          'Coach',
          'Computer Engineer',
          'Computer Programmer',
          'Construction Manager',
          'Consultant',
          'Counselor',
          'Curator',
          'Customer Service Representative',
          'Dancer',
          'Data Analyst',
          'Database Administrator',
          'Dentist',
          'Dermatologist',
          'Dietitian',
          'Diplomat',
          'Director',
          'Doctor',
          'Driver',
          'Economist',
          'Editor',
          'Electrician',
          'Engineer',
          'Environmental Scientist',
          'Epidemiologist',
          'Event Planner',
          'Farmer',
          'Fashion Designer',
          'Film Director',
          'Financial Analyst',
          'Firefighter',
          'Fisherman',
          'Florist',
          'Food Scientist',
          'Forensic Scientist',
          'Forest Ranger',
          'Gardener',
          'Geologist',
          'Graphic Designer',
          'Hairdresser',
          'Health Educator',
          'Historian',
          'Home Health Aide',
          'Hotel Manager',
          'Human Resources Manager',
          'Illustrator',
          'Industrial Designer',
          'Industrial Engineer',
          'Information Security Analyst',
          'Insurance Agent',
          'Interior Designer',
          'Interpreter',
          'Investigator',
          'Journalist',
          'Judge',
          'Kindergarten Teacher',
          'Laboratory Technician',
          'Lawyer',
          'Librarian',
          'Lifeguard',
          'Logistics Manager',
          'Machine Operator',
          'Makeup Artist',
          'Management Consultant',
          'Marine Biologist',
          'Marketing Manager',
          'Massage Therapist',
          'Mathematician',
          'Mechanical Engineer',
          'Medical Laboratory Scientist',
          'Meteorologist',
          'Microbiologist',
          'Midwife',
          'Military Officer',
          'Music Teacher',
          'Musician',
          'Network Administrator',
          'Nurse',
          'Nutritionist',
          'Occupational Therapist',
          'Office Manager',
          'Optometrist',
          'Painter',
          'Paramedic',
          'Park Ranger',
          'Pathologist',
          'Pediatrician',
          'Pharmacist',
          'Photographer',
          'Physical Therapist',
          'Physician',
          'Physicist',
          'Pilot',
          'Plumber',
          'Police Officer',
          'Political Scientist',
          'Postal Worker',
          'Professor',
          'Project Manager',
          'Psychiatrist',
          'Psychologist',
          'Public Relations Specialist',
          'Radiologist',
          'Real Estate Agent',
          'Receptionist',
          'Recruiter',
          'Research Scientist',
          'Retail Manager',
          'Robotics Engineer',
          'Sales Manager',
          'Sales Representative',
          'Scientist',
          'Screenwriter',
          'Secretary',
          'Security Guard',
          'Social Worker',
          'Software Developer',
          'Sound Engineer',
          'Speech Therapist',
          'Statistician',
          'Stockbroker',
          'Surgeon',
          'Surveyor',
          'Systems Analyst',
          'Tailor',
          'Teacher',
          'Technical Writer',
          'Technician',
          'Therapist',
          'Tour Guide',
          'Translator',
          'Travel Agent',
          'Truck Driver',
          'Urban Planner',
          'Veterinarian',
          'Video Editor',
          'Waiter',
          'Web Developer',
          'Writer'
        ]
      >;
    annual_income: Attribute.Enumeration<
      [
        'Any',
        'Less than Rs 50000',
        'Rs 50,000',
        'Rs 1,00,000 (1 Lakh)',
        'Rs 2,00,000 (2 Lakh)',
        'Rs 3,00,000 (3 Lakh)',
        'Rs 4,00,000 (4 Lakh)',
        'Rs 5,00,000 (5 Lakh)',
        'Rs 6,00,000 (6 Lakh)',
        'Rs 7,00,000 (7 Lakh)',
        'Rs 8,00,000 (8 Lakh)',
        'Rs 9,00,000 (9 Lakh)',
        'Rs 10,00,000 (10 Lakh)',
        'Rs 15,00,000 (15 Lakh)',
        'Rs 20,00,000 (20 Lakh)',
        'Rs 25,00,000 (25 Lakh)',
        'Rs 30,00,000 (30 Lakh)',
        'Rs 40,00,000 (40 Lakh)',
        'Rs 50,00,000 (50 Lakh)',
        'Rs 60,00,000 (60 Lakh)',
        'Rs 70,00,000 (70 Lakh)',
        'Rs 80,00,000 (80 Lakh)',
        'Rs 90,00,000 (90 Lakh)',
        'Rs 1,00,00,000 (1 Crore)',
        'More than Rs 1,00,00,000 '
      ]
    >;
  };
}

export interface ComponentPartnerLocation extends Schema.Component {
  collectionName: 'components_component_partner_locations';
  info: {
    displayName: 'partner location';
    description: '';
  };
  attributes: {
    country: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Any',
          'Afghanistan',
          'Albania',
          'Algeria',
          'Andorra',
          'Angola',
          'Antigua and Barbuda',
          'Argentina',
          'Armenia',
          'Australia',
          'Austria',
          'Azerbaijan',
          'Bahamas',
          'Bahrain',
          'Bangladesh',
          'Barbados',
          'Belarus',
          'Belgium',
          'Belize',
          'Benin',
          'Bhutan',
          'Bolivia',
          'Bosnia and Herzegovina',
          'Botswana',
          'Brazil',
          'Brunei',
          'Bulgaria',
          'Burkina Faso',
          'Burundi',
          'Cabo Verde',
          'Cambodia',
          'Cameroon',
          'Canada',
          'Central African Republic',
          'Chad',
          'Chile',
          'China',
          'Colombia',
          'Comoros',
          'Congo, Democratic Republic of the',
          'Congo, Republic of the',
          'Costa Rica',
          'Croatia',
          'Cuba',
          'Cyprus',
          'Czech Republic',
          'Denmark',
          'Djibouti',
          'Dominica',
          'Dominican Republic',
          'East Timor (Timor-Leste)',
          'Ecuador',
          'Egypt',
          'El Salvador',
          'Equatorial Guinea',
          'Eritrea',
          'Estonia',
          'Eswatini',
          'Ethiopia',
          'Fiji',
          'Finland',
          'France',
          'Gabon',
          'Gambia',
          'Georgia',
          'Germany',
          'Ghana',
          'Greece',
          'Grenada',
          'Guatemala',
          'Guinea',
          'Guinea-Bissau',
          'Guyana',
          'Haiti',
          'Honduras',
          'Hungary',
          'Iceland',
          'India',
          'Indonesia',
          'Iran',
          'Iraq',
          'Ireland',
          'Israel',
          'Italy',
          'Ivory Coast',
          'Jamaica',
          'Japan',
          'Jordan',
          'Kazakhstan',
          'Kenya',
          'Kiribati',
          'Korea, North',
          'Korea, South',
          'Kosovo',
          'Kuwait',
          'Kyrgyzstan',
          'Laos',
          'Latvia',
          'Lebanon',
          'Lesotho',
          'Liberia',
          'Libya',
          'Liechtenstein',
          'Lithuania',
          'Luxembourg',
          'Madagascar',
          'Malawi',
          'Malaysia',
          'Maldives',
          'Mali',
          'Malta',
          'Marshall Islands',
          'Mauritania',
          'Mauritius',
          'Mexico',
          'Micronesia',
          'Moldova',
          'Monaco',
          'Mongolia',
          'Montenegro',
          'Morocco',
          'Mozambique',
          'Myanmar (Burma)',
          'Namibia',
          'Nauru',
          'Nepal',
          'Netherlands',
          'New Zealand',
          'Nicaragua',
          'Niger',
          'Nigeria',
          'North Macedonia',
          'Norway',
          'Oman',
          'Pakistan',
          'Palau',
          'Panama',
          'Papua New Guinea',
          'Paraguay',
          'Peru',
          'Philippines',
          'Poland',
          'Portugal',
          'Qatar',
          'Romania',
          'Russia',
          'Rwanda',
          'Saint Kitts and Nevis',
          'Saint Lucia',
          'Saint Vincent and the Grenadines',
          'Samoa',
          'San Marino',
          'Sao Tome and Principe',
          'Saudi Arabia',
          'Senegal',
          'Serbia',
          'Seychelles',
          'Sierra Leone',
          'Singapore',
          'Slovakia',
          'Slovenia',
          'Solomon Islands',
          'Somalia',
          'South Africa',
          'Spain',
          'Sri Lanka',
          'Sudan',
          'Sudan, South',
          'Suriname',
          'Sweden',
          'Switzerland',
          'Syria',
          'Taiwan',
          'Tajikistan',
          'Tanzania',
          'Thailand',
          'Togo',
          'Tonga',
          'Trinidad and Tobago',
          'Tunisia',
          'Turkey',
          'Turkmenistan',
          'Tuvalu',
          'Uganda',
          'Ukraine',
          'United Arab Emirates',
          'United Kingdom',
          'United States',
          'Uruguay',
          'Uzbekistan',
          'Vanuatu',
          'Vatican City',
          'Venezuela',
          'Vietnam',
          'Yemen',
          'Zambia',
          'Zimbabwe',
          '',
          ''
        ]
      >;
    nationality: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Any',
          'Afghan',
          'Albanian',
          'Algerian',
          'American',
          'Andorran',
          'Angolan',
          'Antiguans',
          'Argentinean',
          'Armenian',
          'Australian',
          'Austrian',
          'Azerbaijani',
          'Bahamian',
          'Bahraini',
          'Bangladeshi',
          'Barbadian',
          'Barbudans',
          'Batswana',
          'Belarusian',
          'Indian'
        ]
      >;
    region: Attribute.String;
    city: Attribute.String;
  };
}

export interface ComponentProfileImages extends Schema.Component {
  collectionName: 'components_component_profile_images';
  info: {
    displayName: 'profile_images';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
    member_id: Attribute.Relation<
      'component.profile-images',
      'oneToOne',
      'api::member.member'
    >;
  };
}

export interface ComponentQuestionCollection extends Schema.Component {
  collectionName: 'components_component_question_collections';
  info: {
    displayName: 'question collection';
  };
  attributes: {
    question_text: Attribute.String;
    options: Attribute.JSON;
    correct_option: Attribute.Integer;
  };
}

export interface ComponentReligionPreference extends Schema.Component {
  collectionName: 'components_component_religion_preferences';
  info: {
    displayName: 'religious preference';
    description: '';
  };
  attributes: {
    religion: Attribute.String;
    caste: Attribute.String;
    subcaste: Attribute.String;
  };
}

export interface ComponentReligiousInfo extends Schema.Component {
  collectionName: 'components_component_religious_infos';
  info: {
    displayName: 'religious info';
  };
  attributes: {
    religion: Attribute.String;
    caste: Attribute.String;
    subcaste: Attribute.String;
  };
}

export interface ComponentSocialMediaVerify extends Schema.Component {
  collectionName: 'components_component_social_media_verifies';
  info: {
    displayName: 'social media verify';
    description: '';
  };
  attributes: {
    profile_id: Attribute.String;
    profile_url: Attribute.String;
    provider: Attribute.Enumeration<['Facebook', 'Instagram', 'Linkedin']>;
  };
}

export interface ComponentSocialnwComment extends Schema.Component {
  collectionName: 'components_component_comment';
  info: {
    displayName: 'socialnw comment';
  };
  attributes: {
    author: Attribute.Relation<
      'component.socialnw-comment',
      'oneToOne',
      'api::member.member'
    >;
    content: Attribute.Text;
    socialnw_post: Attribute.Relation<
      'component.socialnw-comment',
      'oneToOne',
      'api::socialnw-post.socialnw-post'
    >;
  };
}

export interface ComponentSpecialOffer extends Schema.Component {
  collectionName: 'components_component_special_offers';
  info: {
    displayName: 'special_offer';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    valid_until: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.age': ComponentAge;
      'component.comments': ComponentComments;
      'component.height-preference': ComponentHeightPreference;
      'component.location': ComponentLocation;
      'component.partner-education-preference': ComponentPartnerEducationPreference;
      'component.partner-location': ComponentPartnerLocation;
      'component.profile-images': ComponentProfileImages;
      'component.question-collection': ComponentQuestionCollection;
      'component.religion-preference': ComponentReligionPreference;
      'component.religious-info': ComponentReligiousInfo;
      'component.social-media-verify': ComponentSocialMediaVerify;
      'component.socialnw-comment': ComponentSocialnwComment;
      'component.special-offer': ComponentSpecialOffer;
    }
  }
}
