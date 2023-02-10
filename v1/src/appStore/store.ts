import {
  configureStore,
  ThunkAction,
  Action,
  Reducer,
  combineReducers,
  AnyAction,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  PAUSE,
  REHYDRATE,
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import {
  ProgramProviderReducer,
  ProviderReducer,
  CandidateReducer,
  ProgramDashboardReducer,
  WorkflowReducer,
  ProgramReducer,
  AuthReducer,
  AdminReducer,
  AlertReducer,
} from "./slices";

const persistConfig = {
  key: "root",
  version: 6,
  storage,
};

const appReducer = combineReducers({
  programProvider: ProgramProviderReducer,
  candidate: CandidateReducer,
  programDashboard: ProgramDashboardReducer,
  workflow: WorkflowReducer,
  program: ProgramReducer,
  auth: AuthReducer,
  admin: AdminReducer,
  alert: AlertReducer,
  provider: ProviderReducer,
});

// implement the signout action here to clear out state and return an empty object to redux persist
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return appReducer(state ?? prevState, action);
};

const persistedReducer: typeof appReducer = persistReducer(
  persistConfig,
  rootReducer
);

const prevState = JSON.parse(
  (localStorage.getItem("persist:root") ?? "")
    /** remove { and } */
    .replace(/"{/g, "{")
    .replace(/}"/g, "}")
    /** remove [ and ] */
    .replace(/"\[/g, "[")
    .replace(/\]"/g, "]")
    /** remove all '\' */
    .replace(/\\/g, "")
);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: prevState,
  // disable serializable check for redux persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// create a persistor
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
