import type { BaseErrorDto as SharedBaseErrorDto, ValidationErrorDto as SharedValidationErrorDto } from '@sailor-moon-memory/shared/errors';
import { describe, it, expectTypeOf } from 'vitest';
import { BaseError } from '@/errors/BaseError.js';
import { ValidationError } from '@/errors/ValidationError.js';
import { mapBaseErrorToDto, mapValidationErrorToDto } from '@/errors/mapper.js';

describe('Base Error data transfer object contract', () => {
    it('enforces server DTO matches shared projection', () => {
        const serverBaseError = new BaseError('I am Base Error', 'Hello everynyan', 200);
        const serverBaseErrorDto = mapBaseErrorToDto(serverBaseError);
        
        expectTypeOf(serverBaseErrorDto).toEqualTypeOf<SharedBaseErrorDto>();
    })
})

describe('Validation Error data transfer object contract', () => {
    it('enforces server DTO matches shared projection', () => {
        const serverValidationError = new ValidationError({swag: ["swagger", 'poopy']});
        const serverValidationErrorDto = mapValidationErrorToDto(serverValidationError);
        
        expectTypeOf(serverValidationErrorDto).toEqualTypeOf<SharedValidationErrorDto>();
    })
})