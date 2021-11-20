import { FETCH_RESOURCE,
	FETCH_RESOURCE_DETAIL,
	FETCH_RESOURCE_DETAIL_FAILURE,
	FETCH_RESOURCE_DETAIL_SUCCESS,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
} from './constants';
import { FetchResourceDetailFailure,
	FetchResourceDetailRequest,
	FetchResourceDetailSuccess,
	FetchResourceFailure,
	FetchResourceRequest,
	FetchResourceSuccess,
	FetchRootsFailure,
	FetchRootsRequest,
	FetchRootsSuccess,
	ResourceResult,
	Root } from './models';

// To fetch Roots
export const fetchRoots = () : FetchRootsRequest => ({
	type: FETCH_ROOTS,
});

export const fetchRootsSuccess = (payload: Root) : FetchRootsSuccess => ({
	type: FETCH_ROOTS_SUCCESS,
	payload,
});

export const fetchRootsFailure = (payload : Error) : FetchRootsFailure => ({
	type: FETCH_ROOTS_FAILURE,
	payload,
});

// To fetch Resources inside a Root
export const fetchResource = (rootType: string) : FetchResourceRequest => ({
	type: FETCH_RESOURCE,
	rootType,
});

export const fetchResourceSuccess = (payload: ResourceResult[]):
FetchResourceSuccess => ({
	type: FETCH_RESOURCE_SUCCESS,
	payload,
});

export const fetchResourceFailure = (payload : Error)
: FetchResourceFailure => ({
	type: FETCH_RESOURCE_FAILURE,
	payload,
});

// To fetch Other Info inside a Resource
export const fetchResourceDetail = (apiURL: string) : FetchResourceDetailRequest => ({
	type: FETCH_RESOURCE_DETAIL,
	apiURL,
});

export const fetchResourceDetailSuccess = (payload: ResourceResult):
FetchResourceDetailSuccess => ({
	type: FETCH_RESOURCE_DETAIL_SUCCESS,
	payload,
});

export const fetchResourceDetailFailure = (payload : Error)
: FetchResourceDetailFailure => ({
	type: FETCH_RESOURCE_DETAIL_FAILURE,
	payload,
});
