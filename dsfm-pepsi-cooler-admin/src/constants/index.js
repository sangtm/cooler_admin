export const STATUS_CODE = [
	{
		id: "TODO",
		name: "Todo",
	},
	{
		id: "IN_PROCESS",
		name: "In process",
	},
	{
		id: "DONE",
		name: "Done",
	},
];

export const urlTemplate = {
	templateImportStore:
		"https://docs.google.com/spreadsheets/d/163siPLhhDnAyJTumdylGPizvae5XhBM-PR8u_c3srwk/export?format=xlsx",
	templateImportPlan:
		"https://docs.google.com/spreadsheets/d/163siPLhhDnAyJTumdylGPizvae5XhBM-PR8u_c3srwk/export?format=xlsx",
	templateImportUser:
		"https://docs.google.com/spreadsheets/d/163siPLhhDnAyJTumdylGPizvae5XhBM-PR8u_c3srwk/export?format=xlsx",
};

export const ROLE = {
	GUEST: "GUEST",
};

export const PAGE_SIZE_LIMIT = {
	PG: 1000, // Get pg list
	STORE: 10000, // Get store list
};

export const LOCATION_COMPONENT_CODE = [
	"store_province_update",
	"store_district_update",
	"store_ward_update",
];
