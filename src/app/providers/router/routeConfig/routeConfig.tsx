import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import {
	AppRoutes,
	getRouteAdmin,
	getRouteEventById,
	getRouteLogin,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
	getRouteRegistration,
} from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { UserRoles } from "@/entities/User";
import { LoginPage } from "@/pages/Login";
import { RegistrationPage } from "@/pages/Registration";
import { LazyProfiePage } from "@/pages/ProfilePage";
import { LazyEventByIdPage } from "@/pages/EventByIdPage";
import { LazyAdminPage } from "@/pages/AdminPage";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	main: {
		path: getRouteMain(),
		element: <LazyMainPage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
	login: {
		path: getRouteLogin(),
		element: <LoginPage />,
	},
	registration: {
		path: getRouteRegistration(),
		element: <RegistrationPage />,
	},
	profile: {
		path: getRouteProfile(),
		element: <LazyProfiePage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
	event_by_id: {
		path: getRouteEventById(),
		element: <LazyEventByIdPage />,
		authOnly: true,
		roles: [UserRoles.USER],
	},
	admin: {
		path: getRouteAdmin(),
		element: <LazyAdminPage />,
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MANAGER],
	},
};
