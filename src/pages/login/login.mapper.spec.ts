import * as apiModel from './api/login.api-model';
import * as viewModel from './login.vm';
import { mapCredentialdFromVmToApi } from './login.mapper';



describe('mapCredentialdFromVmToApi', () => {
    it('should map view model to api model correctly', () => {
        // Arrange
        const vmcredentials: viewModel.Credentials = {
            user: 'testUser',
            password: 'testPassword',
        };
        const expectCredentials: apiModel.Credentials = {
            user: 'testUser',
            password: 'testPassword',
        };

        // Act
        const result: apiModel.Credentials = mapCredentialdFromVmToApi(vmcredentials);
        // Assert
        expect(result).toEqual(expectCredentials);
        expect(result).not.toBe(vmcredentials);

    });
});

