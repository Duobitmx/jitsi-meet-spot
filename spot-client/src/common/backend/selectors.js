import { getSpotServicesConfig } from '../app-state';

/**
 * Returns the permanent pairing code to be used by Spot TV and Spot Remotes which stay connected to the service for
 * long periods of time.
 *
 * @param {Object} state - The Redux state.
 * @returns {string}
 */
export function getPermanentPairingCode(state) {
    return state.backend.permanentPairingCode;
}

/**
 * Checks whether or not the backend is to be used with the remote control service.
 *
 * @param {Object} state - The Redux state.
 * @returns {boolean}
 */
export function isBackendEnabled(state) {
    return Boolean(getSpotServicesConfig(state).pairingServiceUrl);
}
