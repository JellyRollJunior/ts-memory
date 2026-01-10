import type { BaseErrorDto as SharedBaseErrorDto, ValidationErrorDto as SharedValidationErrorDto } from '@sailor-moon-memory/shared/errors';
import { describe, it, expectTypeOf } from 'vitest';
import { BaseError } from '@/errors/BaseError.js';
import { ValidationError } from '@/errors/ValidationError.js';

describe('Base Error data transfer object contract', () => {
    it('enforces server DTO matches shared projection', () => {
        type serverBaseError = InstanceType<typeof BaseError>
        
        expectTypeOf<serverBaseError>().toEqualTypeOf<SharedBaseErrorDto>();
    })
})

describe('Validation Error data transfer object contract', () => {
        it('enforces server DTO matches shared projection', () => {
        type serverValidationError = InstanceType<typeof ValidationError>
        
        expectTypeOf<string>().toEqualTypeOf<boolean>();
    })
})