/* eslint-disable default-case */
import { uri } from './constants'
import { DecodeAPIResponse } from './interfaces'

export function api(endpoint: string): string {
	return `${uri}${endpoint}`
}

export function decodeApiResponse(apiResponse: APIResponse): DecodeAPIResponse {
	if (!apiResponse.response) {
		return {
			response: {},
			status: apiResponse.status,
		}
	}

	return {
		response: JSON.parse(apiResponse.response),
		status: apiResponse.status,
	}
}

export const handleErrors = (status: number, response: any) => {
	switch (status) {
		case 400:
		case 401:
		case 403:
		case 404:
		case 405:
		case 406:
		case 500:
			notify(response, 'error', 3000)
	}
}
