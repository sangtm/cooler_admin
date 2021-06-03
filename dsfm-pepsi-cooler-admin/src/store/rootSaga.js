import { all } from "redux-saga/effects";
import appSagas from "../app/sagas";
import authSagas from "../features/login/sagas";
import pgsSagas from "../features/pgs/sagas";
import storesSagas from "../features/stores/sagas";
import publicSagas from "../features/public/sagas";
import regionsSagas from "../features/regions/sagas";
import storeTypesSagas from "../features/storeTypes/sagas";
import plansSagas from "../features/plans/sagas";
import campaignsSagas from "../features/campaigns/sagas";
import importSagas from "../features/import/sagas";
import zoneSagas from "../features/zones/sagas";
import citySagas from "../features/cities/sagas";
import chartsSagas from "../features/dashboard/sagas";
import planManualSagas from "../features/plan-manual/sagas";

export default function* rootSaga() {
	yield all([
		...appSagas,
		...authSagas,
		...pgsSagas,
		...storesSagas,
		...publicSagas,
		...regionsSagas,
		...storeTypesSagas,
		...plansSagas,
		...campaignsSagas,
		...importSagas,
		...zoneSagas,
		...citySagas,
		...chartsSagas,
		...planManualSagas,
	]);
}
