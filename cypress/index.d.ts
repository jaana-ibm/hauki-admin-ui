/// <reference types="cypress" />
/// <reference types="../src/common/lib/types" />

declare namespace Cypress {
  interface Chainable {
    visitResourcePageAsUnauthenticatedUser(id: string): void;
    visitResourcePageAsAuthenticatedUser(id: string): void;
    createDatePeriod: ({
      name,
      startDate,
      endDate,
      resourceId,
      timeSpans,
      rules,
    }: {
      name: string;
      startDate: Date;
      endDate: Date;
      resourceId: string;
      timeSpans?: Partial<TimeSpan>[];
      rules?: Partial<GroupRule>[];
    }) => Chainable;
  }
}
