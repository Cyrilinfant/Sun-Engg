import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

const projectData = [{
    year: 2006,
    client: "CHEMTEX CONSULTING OF INDIA (P) LTD.",
    description: "Fabrication drawing for platforms, Walkways, Silo...",
    project: "C.P.Building, M&G Polymers Brazil S.A.",
  },
  {
    year: 2006,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of construction drawings for complete Civil work using by CAD.Proto type fast breeder reactorBuilding.",
    project: "Proto type fast breeder reactor Building.",
  },
  {
    year: 2006,
    client: "VESTAL STEEL SPECIALTIES INC., TEXAS,U.S.A",
    description:
      "Preparation of fabrication drawings for steel work for Residential buildings by using X-Steel/CAD.",
    project: "San Antonio, Texas.",
  },
  {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Fabrication drawing for Industrial buildings...",
    project: "Expansion to Private Mini Storage",
  },
  {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for Residential buildings by using X-Steel/CAD",
    project: "Doodlets re-model",
  },
  {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for residantal buildings by using X-Steel/CAD",
    project: "Marquez Place",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings steel work for Truss by using X-steel.",
    project: "The New Indianapolis Airpor",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for industrial buildings by using X-Steel/CAD.",
    project: "Fair OAKS village retail center buildings",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for Industrial buildings by using X-Steel/CAD.",
    project: "Artyard in the railyard.",
  },
  {
    year: 2007,
    client: "FL SMIDTH MINERALS PVT LTD., CHENNAI.",
    description:
      "Preparation of Fabrication drawings using by X-Steel. (South Africa Standard)",
    project: "Regrind Cyclone Structure",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for Roof Frame steel work by using X-Steel/CAD.",
    project: "The Indianapolis Airport.",
  },
   {
    year: 2007,
    client: "FL SMIDTH MINERALS PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings by using X-Steel",
    project: "Magnetic Separator Supporting Structure.",
  },
  {
    year: 2007,
    client: "DELUGE FIRE PROTECTION (SEA) PTE LTD..",
    description:
      "Preparation of As-built drawings for C.D.Shelters by using CAD",
    project: "Housing and develepmentBoard, Singapore",
  },
    {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for residantal buildings by using X-Steel/CAD.",
    project: "Wamu BayColony TownCenter.",
  },
   {
    year: 2007,
    client: "BERGER IRON WORKS INC., HOUSTON , TEXAS. USA.",
    description: "Preparation of Shop drawings for Fuel station Canopy, Car wash area , Remote Fueling area and Tank containment area by using X-Steel/CAD.",
    project: "Gulf States Toyota Inc. Vehicle Processing center.",
  },
  {
    year: 2007,
    client: "BERGER IRON WORKS INC., HOUSTON , TEXAS. USA.",
    description: "Preparation of Shop drawings for steel pipe frame supports by using XSteel/CAD.",
    project: "NORTHEAST COLLEGE.",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, USA",
    description: "Preparation of fabrication drawings for steel work for Technology building by using X-Steel/CAD.",
    project: "Leander ISD Technology Bldg.",
    
  },
  {
    year: 2007,
    client: "TOTAL PETROCHEMICALS, TEXAS, U.S.A.",
    description: "Preparation of fabrication drawings for steel work for pipe rack structure by using X-Steel.",
    project: "VISBREAKER PIPERACK.",
  },
  {
    year: 2007,
    client: "PREMCORREFINING,TEXAS,U.S.A.",
    description: "Preparation of fabrication drawings for steel work for pipe rack structure by using X-Steel",
    project: "THE PREMCOR REFINING.",
  },
   {
    year: 2007,
    client: "VESTAL STEEL SPECIALTIES INC., TEXAS -78154 U.S.A.",
    description: "Preparation of fabrication drawings for steel work for Tennis court pavilion by using CAD",
    project: "MABRY PAVILION TRINITY UNIV.",
  },
    {
    year: 2007,
    client: "VESTAL STEEL SPECIALTIES INC., TEXAS -78154 U.S.A.",
    description: "Preparation of fabrication drawings for steel work for F.K. Pump pipe support towers for BUZZI UNICEM USA. by using X-Steel",
    project: "BUZZI UNICEM USA.",
  },
     {
    year: 2007,
    client: "VESTAL STEEL SPECIALTIES INC., TEXAS -78154 U.S.A.",
    description: "Preparation of As-built drawings for 24 storey commercial bldg. for fire alarm installation system by using CAD.",
    project: "WORMALD INTL (Singapore) PTE LTD.",
  },
   {
    year: 2007,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description: "Preparation of fabrication drawings for steel work for Hotel and Suites by using CAD.",
    project: "HOLIDAY INN EXPRESS.",
  },
     {
    year: 2007,
    client: "BERGER IRON WORKS INC., HOUSTON , TEXAS. USA.",
    description: "Preparation of fabrication drawings for steel work for Jail Expansions by using CAD.",
    project: "FORTBEND JAIL EXPANSION.",
  },
  
  {
    year: 2008,
    client: "ARJUN PROJECT SERVICES P LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for Steel detailing for Hanging Track by using X-Steel.",
    project: "PLEASANT PLAINS BAPTIST CHURCH FAMILY LIFE CENTER",
  },
  {
    year: 2008,
    client: "MID – WEST STEEL BUILDING COMPANY, HOUSTAN, TEXAS, U.S.A.",
    description:
      "Preparation of fabrication drawings for steel detailing for Retail Shell by using Autocad",
    project: "RETAIL SHELL ",
  },
  {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of fabrication drawings for steel detailing for Retail Shell by using Autocad",
    project: "PARKWAY RELOCATION INTERIOR MODIFICATION ",
  },
    {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of fabrication drawings for steel detailing for Storage Yard by using Autocad.",
    project: "FRONTIER STORAGE ",
  },
  {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of fabrication drawings for steel detailing by using Autocad.",
    project: "LAKE CREEK SQUARE RENOVATION ",
  },
  {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Power Plant by using Autocad.",
    project: "Petcoke Transfer Point 2. ",
  },
   {
    year: 2008,
    client: "BERGER IRON WORKS INC., HOUSTON , TEXAS. USA.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Engineering work Shop by using Autocad.",
    project: "Rice Undergrad Lab. ",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using Autocad.",
    project: "ArizonaHealth & TechnologyPark. ",
  },
    {
    year: 2008,
    client: "GASTONIA IRON WORKS, HOLLY NC - 28125.",
    description:
      "Preparation of fabrication drawings for steel detailing work using by Autocad.",
    project: "WhitesideBuilding. ",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI..",
    description:
      "Preparation of Fabrication drawings using by X-Steel.",
    project: "Staples Shell Building.",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of Fabrication drawings using by X-Steel.",
    project: "Waste Water Treatment Plant.",
  },
   {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Power Plant by using CAD.",
    project: "Lime Stone Transfer Point 3.",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using CAD.",
    project: "Wachova Palm Deser California.",
  },
   {
    year: 2008,
    client: "DELUGE FIRE PROTECTION (SEA) PTE LTD.,.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Pipe Tank by using CAD.",
    project: "Isometric drawing for Pipe Tank.",
  },
   {
    year: 2008,
    client: "VESTAL STEEL SPECIALTIES INC., TEXAS -78154 U.S.A",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "Palo Alto College.",
  },
   {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of Fabrication drawings for steel detailing work using by CAD.",
    project: "Wamu – 249 & Antoine.",
  },
   {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of Fabrication drawings for steel detailing work using by CAD.",
    project: "Wamu – Bellaire & Sewanee",
  },
   {
    year: 2008,
    client: "DELUGE FIRE PROTECTION (SEA) PTE LTD.,",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "Isometric drawing for Ring Fab.",
  },
   {
    year: 2008,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of Fabrication drawings for steel detailing work using by CAD.",
    project: "Best Western Inn",
  },
     {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using CAD.",
    project: "Amtrust Bank",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Stringer by using CAD.",
    project: "8 King St. – New Fire Escape",
  },
    {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Conveyor by using CAD.",
    project: "Structural and Foundation Details of Trestle for Conveyor",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI .",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using CAD.",
    project: "First Bank",
  },
    {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI .",
    description:
      "Preparation of fabrication drawings for steel detailing work by using CAD.",
    project: "Single Conveyor Gallery",
  },
   {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI .",
    description:
      "Preparation of fabrication drawings for steel detailing work by using CAD.",
    project: "Short Gallery",
  },
   {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI .",
    description:
      "Preparation of fabrication drawings for steel detailing work by using CAD.",
    project: "Double Conveyor Gallery",
  },
   {
    year: 2008,
    client: "GASTONIA IRON WORKS, HOLLY NC - 28120 .",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "BaileyRoadHigh School",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using CAD.",
    project: "Issac School",
  },
    {
    year: 2008,
    client: "SHEBZ DOT COM PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings for steel detailing work for Deck Sheets by using CAD.",
    project: "Woody Mountain 2007 Expansion.",
  },
   {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of construction drawings for complete Civil work using by CAD.",
    project: "TurbineBuilding – Layout & Concrete Details of Tie Beams.",
  },
   {
    year: 2008,
    client: "WEBCO FABRICATION INC, HOUSTAN, TEXAS- 77223.",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "PortNechesMiddle School.",
  },
  {
    year: 2008,
    client: "WEBCO FABRICATION INC, HOUSTAN, TEXAS- 77223.",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "GrovesMiddle School.",
  },
   {
    year: 2008,
    client: "FL SMIDTH MINERALS PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings by using X-Steel . (Indian Standard).",
    project: "Nalco.",
  },
  {
    year: 2008,
    client: "FL SMIDTH MINERALS PVT LTD., CHENNAI.",
    description:
      "Preparation of fabrication drawings by using X-Steel .(Indian Standard).",
    project: "Regrind Cyclone Structure.",
  },
  {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Control Room.",
  },
    {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Lime Stone Reclaim Hopper.",
  },
    {
    year: 2008,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Pet Coke Reclaim Hopper.",
  },
   {
    year: 2008,
    client: "GASTONIA IRON WORKS, HOLLY NC - 28120.",
    description:
      "Preparation of fabrication drawings for steel detailing work using by CAD.",
    project: "CMPD Metro Police Station.",
  },

{
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Single Conveyor Gallery Gantry",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Wagon Tippler Shed",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Trestles for Conveyor",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Crusher House",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Transfer Point (TP-110)",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Pet Coke Double Conveyor Gallery",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Single Conveyor Gallery",
  },
  {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Crusher House Switch Gear",
  },
   {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Pet Coke Receiving Hopper",
  },
   {
    year: 2009,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of E-Sheets & Fabrication drawings for steel detailing work for Houston Zoo -Gift Shop, Rhino Holding, Ziraffe Holding using by CAD.",
    project: "Houston Zoo",
  },
   {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work for Roof Purlin, Side Runner and Sag Rod by using CAD.",
    project: "Wagon Tippler Shed",
  },
   {
    year: 2009,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of E-Sheets & Fabrication drawings for Steel Supporting for Folding Partition, Won Doors and Coiling Doors using by CAD.",
    project: "Methodist West Houston Hospital",
  },
    {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work by using CAD.",
    project: "Bed Material Bunker Top Cover",
  },
  {
    year: 2009,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of E-Sheets & Fabrication drawings for Steel Support for Folding Partitions & Recessed Projection Screen using by CAD.",
    project: "TCH West Campus Hospital",
  },
   {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI.",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work for Mono Rail Beam by using CAD.",
    project: "Wagon Tippler Shedr",
  },
   {
    year: 2009,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of E-Sheets & Fabrication drawings for steel detailing work for AHU SS-03, Pipe Rack, Crane Rail Support, Crane Support and Canopy using by CAD.",
    project: "Shell Technology Center",
  },
   {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "HGTU for Conveyor LSC 3 & PC",
  },
    {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Lime Stone Bunker Top Cover",
  },
   {
    year: 2009,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Petcoke Reclaim Hopper",
  },

  {
    year: 2010,
    client: "RSP CIVIL AND STRUCTURAL ENGINEERS. TRICHY",
    description:
      "Preparation of Fabrication drawings for Staircase, Platforms, Supporting Structures, Hopper, Flue duct and misc items for 220M HIGH TWIN CHIMNEY by using CAD.",
    project: "2 x 135 MW Thermal Power Plant, Nellore,A.P.",
  },
 {
    year: 2010,
    client: "VALECHA ENGINEERING LTD., CHENNAI.",
    description:
      "Preparation of Reinforcement details of Residential Buildings by using CAD.",
    project: "The Metro Zone, Chennai.",
  },
  {
    year: 2010,
    client: "Vici Engineers and Consultants Pvt Ltd",
    description:
      "Preparation of GA and fabrication drawings for Boiler Supporting Structures detailing using by Tekla.",
    project: "WHR Boiler",
  },
  {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Rectangular platform, Cover Plate and Ladder (Vessel 72E2, 72E3, 72E8 & 72E9) using by Tekla.",
    project: "Michigan Refining Division.",
  },
   {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Circular platform, (Vessel 8V7) using by Tekla.",
    project: "Michigan Refining Division.",
  },
  {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Rectangular platform and cover Plate (Vessel 74V1, 74V2, 75V1, 72V5, 72V6 & 73V1) using by Tekla.",
    project: "Michigan Refining Division.",
  },
  {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Rectangular platform, Ladder, Safety Gate and cover Plate (Vessel 70V23) using by Tekla.",
    project: "Michigan Refining Division.",
  },
   {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Circular platform (Vessel 4V1) using by Tekla.",
    project: "Michigan Refining Division.",
  },
   {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Pipe Guid and Pipe Support (Vessel 9V13, 12V41, 16V43) using by CAD.",
    project: "Michigan Refining Division.",
  },
    {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Ladder (Vessel 75V8) using by Tekla.",
    project: "Michigan Refining Division.",
  },
   {
    year: 2010,
    client: "ACOUSTICS INDIA PRIVATE LTD, TRICHY",
    description:
      "Preparation Design , GA and fabrication drawings for steel detailing work using by Staad and CAD.",
    project: "Shed For New Factory.",
  },
    {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Circular, Rectangular platform, Ladder, Pipe Guid, Pipe Support and cover Plate using by CAD.",
    project: "Michigan Refining Division.",
  },
    {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Circular, Rectangular platform, Ladder, Pipe Guid, Pipe Support and cover Plate using by CAD.",
    project: "Michigan Refining Division.",
  },
   {
    year: 2010,
    client: "Orizon Industries Inc , U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Rectangular platform, Ladder and cover Plate (Vessel 72V6, 70V40, 70V42 & 70V49) using by CAD.",
    project: "Michigan Refining Division.",
  },
  {
    year: 2010,
    client: "EDAC Engineering Ltd, Chennai",
    description:
      "Design Validation( to review the Modeling and analysis of the STAAD model of Galleries, Trestles, JH’s, Drive house) for Material Handling System.",
    project: "SICAL Iron Ore Terminal atEnnore port. Chennai.",
  },
  {
    year: 2010,
    client: "ESSAR Engineering Services Ltd.,Mumbai,",
    description:
      "Preparation of GA and fabrication drawings for Pet Coke Handling Transfer Towers by using Tekla.",
    project: "Essar Oil Refinery Expansion project at Vadinar.",
  },
   {
    year: 2010,
    client: "EDAC Engineering Ltd, Chennai",
    description:
      "Design(Modeling and Analysis) and Detailing (Mechanical, Structural and Electrical) for Material Handling System. Apx.3500 tonne.",
    project: "Mechanised Iron Ore Handling Facilities at New Mangalore Port.",
  },
   {
    year: 2010,
    client: "LAMBRIGHT DRAWINGS INC, USA",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Small Shelter",
  },
   {
    year: 2010,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of Erection and Shop Drawings for steel detailing work using by CAD.",
    project: "Penthouse / Low roof framing plan.",
  },
  {
    year: 2010,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Gantry Girder",
  },
   {
    year: 2010,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Gantry Girder",
  },
  {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of Erection and Shop drawings by using CAD.",
    project: "Generator Plat form",
  },
  {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of Erection and Shop Drawings(Plat form). by using CAD.",
    project: "All American Cheverolet.",
  },
    {
    year: 2011,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description: "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Structures and Liner Plate.",
  },
   {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Framing Plan using by CAD.",
    project: "Berger., USA.",
  },
   {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "Imperial Oaks Reserve C.",
  },
   {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "L&H Packing –Offal Screens.",
  },

  {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "PLC Rack.",
  },
   {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "L&H Packing –Offal Screens.",
  },
    {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "PLC Rack",
  },
   {
    year: 2011,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description: "Preparation of GA and fabrication drawings for Steel Detailing by using CAD.",
    project: "PLC Rack",
  },
  {
    year: 2011,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description: "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Crusher House, WT Shed, LS.Hopper, PC.Hopper, Bunker, Control Room, Conveyer –Single and double, Transfer Towers and Trestles,",
  },
   {
    year: 2011,
    client: "ESSAR Engineering Services Ltd, Mumbai.",
    description: "Preparation of Erection and Shop Drawings for Conveyers and towers.",
    project: "Essar Oil Refinery Expansion at Vadinar.",
  },

  {
    year: 2012,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Structures and Liner Plates",
  },
  {
    year: 2012,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Framing Plan using by CAD.",
    project: "McDonalds Restaurants",
  },
  {
    year: 2013,
    client: "Coromandel Engineering Company Ltd. Chennai.",
    description:
      "Preparation of Erection and Shop drawings by using Tekla. Qty.3500 tons.",
    project: "Synthetic Iron Oxide Pigment Plant.",
  },
   {
    year: 2013,
    client: "LAMBRIGHT DRAWINGS INC, USA.",
    description:
      "Preparation of Erection and Shop Drawings(Plat form). by using CAD.",
    project: "Circular Platforms, other structures.",
  },
   {
    year: 2013,
    client: "TCE CONSULTING ENGINEERS LTD, CHENNAI",
    description:
      "Preparation of GA and fabrication drawings for steel detailing work using by CAD.",
    project: "Structural Dwgs.",
  },
   {
    year: 2013,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Framing Plan using by CAD.",
    project: "Platforms.",
  },
    {
    year: 2013,
    client: "Shriram EPC Ltd., Chennai.",
    description:
      "Preparation of Piperacks, Tech. Structures, W.T Shed - Erection and Shop drawings by using Tekla. Qty.9500 tons.",
    project: "KRL-BPCL",
  },
  
  
  {
    year: 2014,
    client: "LAMBRIGHT DRAWINGS INC, USA.",
    description: "Preparation of Erection and Shop Drawings by using CAD.",
    project: "Pipe rack and Circular platforms.",
  },
  {
    year: 2014,
    client: "DELUGE FIRE PROTECTION (SEA) PTE LTD., SINGAPORE.",
    description:
      "Preparation of Piping Isometric And firefighting industrial Sprinkler.",
    project: " CBI PTE LTD.",
  },
  {
    year: 2014,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Framing Plan using by CAD.",
    project: " Industrial Buildings.",
  },
  {
    year: 2015,
    client: "DCW LTD.,, Tamilnadu",
    description:
      "Preparation of Piperacks, other buildings - Erection and Shop drawings by using Tekla. Qty.1500 tons.",
    project: "Filter Press Building.",
  },
  {
    year: 2015,
    client: "Ray Engineering Ltd",
    description:
      "Preparation of Erection and Shop Drawings DHDS Pipe Rack and other buildings. Total Weight -9500 tons.",
    project: "BPCL-IREP –Kochi Refinery.",
  },
  {
    year: 2015,
    client: "AMANAINDUSTRIES,SHARJAH,UAE.",
    description:
      "Preparation of Structural drawings for Boolywood Don and Control Buildings .",
    project: "Boolywood Don and Control Buildings.",
  },
  {
    year: 2016,
    client: "SATNAM GLOBAL Infra Projects Ltd.,.",
    description:
      "Preparation of GA and fabrication drawings for Platforms, Framing Structures, Supporting Structures, Pipe racks. Total Weight- 2500 tons.",
    project: "BPCL-IREP –Kochi Refinery.",
  },
  {
    year: 2016,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of GA and fabrication drawings for Industrial Chiller and other platforms",
    project: "Industrial Buildings.",
  },
  {
    year: 2016,
    client: "LAMBRIGHT DRAWINGS INC, USA.",
    description:
      "Preparation of Erection and Shop Drawings for Santikos Blanca Theatre.",
    project: "Santikos Blanca Theatre",
  },
    {
    year: 2016,
    client: "Ray Engineering Ltd,",
    description:
      "Preparation of Erection and Shop Drawings DHDS Cable Racks and other Misc. structures. Total Weight -1250 tons.",
    project: "BPCL-IREP –Kochi Refinery",
  },
  {
    year: 2017,
    client: "Shriram EPC Ltd., Chennai.",
    description:
      "Design And Analysis for Silo and Silo Structures for 100M,200M and 300M. Preparation of GA and fabrication drawings for Silo and supporting Structures.",
    project: "Vizak Steel Plant",
  },
  {
    year: 2017,
    client: "FLSmidth Pvt Ltd.,.",
    description:
      "Preparation of Erection and Shop Drawings for Coal Handling Plant – Conveyors, Towers, Sheds,. Total Weight -1750 tons.",
    project: "Harduaganj Thermal Power Station. –Lucknow, Uttar pradesh.",
  },
  {
    year: 2017,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of GA and fabrication drawings for Industrial Structures.",
    project: "Industrial Buildings.",
  },
  {
    year: 2018,
    client: "BGR Energy Systems Ltd, Chennai.",
    description:
      "Preparation of Erection and Shop Drawings for Conveyor,towers and shed.",
    project: "3 x 660MW GHATAMPUR THERMAL POWER PROJECT.",
  },
  {
    year: 2018,
    client: "BGR Energy Systems Ltd, Chennai.",
    description: "Preparation of Erection and Shop Drawings.",
    project: "NCPT-III-North Chennai.",
  },
  {
    year: 2018,
    client: "BAL REYAMI STEEL CONSTRACTION LLC, Dubai.",
    description:
      "Preparation of GA and fabrication drawings for Multiple Platforms and supporting Structures.",
    project: "AL Zour Refinery Projects.",
  },
  {
    year: 2019,
    client: "AL REYAMI STEEL CONSTRACTION LLC, Dubai.",
    description:
      "Preparation of GA and fabrication drawings for Total Roof Structures.Apx weight.2750 Metric tons.",
    project: "YAS South Integrated Declinational Resort.",
  },
  {
    year: 2019,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description: "Preparation of Erection and Shop Drawings for Buildings.",
    project: "World Car Kia.",
  },
  {
    year: 2019,
    client: "Kazakhstan Petrochemical Industries Inc. LLP",
    description:
      "Preparation of Erection and Shop Drawings for DHDS Cable Racks and other Misc. structures. Total Weight -1250 tons.",
    project: "Integrated Petrochemical Complex Construction in Atyrau Region.",
  },
   {
    year: 2019,
    client: "FLSmidth Pvt Ltd.,",
    description: "Preparation of Erection and Shop Drawings for Crusher House,Mixer Building, Piperacks,.",
    project: "UTKAL Alumina International Limited.",
  },
    {
    year: 2020,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of GA and fabrication drawings for building.",
    project: "Texas State Affordable Housing Corporation.",
  },
   {
    year: 2020,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A",
    description:
      "Preparation of Erection and Shop Drawings for building.",
    project: "McDonalds Restaurants Inc.",
  },
   {
    year: 2020,
    client: "ITD Cementation Ltd.",
    description:
      "Preparation of Erection and Shop Drawings for Aero Bridges, Link Platforms, Façade Columns and other Misc, structures. Total Weight -2500 tons..",
    project: "Trichy Airports.",
  },
   {
    year: 2021,
    client: "Satnam Global Ltd,.",
    description:
      "Preparation of GA and fabrication drawings for Bridge Structures.",
    project: "ONGC- Hazira.",
  },
   {
    year: 2021,
    client: "TATA Consulting Engineers Ltd,.",
    description:
      "Preparation of GA and fabrication drawings for Nuclear Buildings and Towers.",
    project: "Nuclear Power Corporation India Ltd,.",
  },
  {
    year: 2021,
    client: "SETIEN AND ASSOCIATES INC, TEXAS, U.S.A.",
    description:
      "Preparation of GA and fabrication drawings for different projects.",
    project: "Industrial and Commercial Buildings,.",
  },
   {
    year: 2022,
    client: "M.N Dastur and Company P Ltd.,",
    description:
      "Preparation of Erection and Shop Drawings for Water and Fire water Bump Houses, Hopper and supporting structures.",
    project: "ARCELORMITTAL NIPPON STEEL INDIA LIMITED.,.",
  },
   {
    year: 2022,
    client: "Pertofac and ISKAR,",
    description:
      "Preparation of Erection and Shop Drawings. Four Water Treatment plant different structures.",
    project: "Water Treatment plant.",
  },
   {
    year: 2022,
    client: "M.N Dastur and Company P Ltd.,",
    description:
      "Preparation of Erection and Shop Drawings. Four poster Structures with different level platforms.",
    project: "BMM Blast Furnace.",
  },];

const sliderImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
  "/images/project5.jpg",
  "/images/project6.jpg",
  "/images/project7.jpg",
  
];

const ProjectTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const years = [...new Set(projectData.map((p) => p.year))].sort((a, b) => b - a);
  const filteredProjects = selectedYear ? projectData.filter((p) => p.year === selectedYear) : [];

  // Image slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Drag scroll for year buttons
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    scrollEl.addEventListener("mouseleave", handleMouseUp);
    scrollEl.addEventListener("mouseup", handleMouseUp);

    return () => {
      scrollEl.removeEventListener("mouseleave", handleMouseUp);
      scrollEl.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="timeline-container">
      <h1>Project Timeline</h1>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="slider-btn left" onClick={prevSlide}>&#10094;</button>
        <img
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slider-image"
        />
        <button className="slider-btn right" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Year Buttons */}
      <div
        className="year-buttons"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={year === selectedYear ? "active" : ""}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="card-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.project}</h3>
            <p><strong>Client:</strong> {project.client}</p>
            <p><strong>Description:</strong> {project.description}</p>
          </div>
        ))}
        {selectedYear && filteredProjects.length === 0 && (
          <p>No projects found for {selectedYear}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectTimeline;
