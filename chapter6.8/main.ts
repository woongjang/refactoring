interface DateRange {
  startDate: Date;
  endDate: Date;
}

function baseAmountInvoiced(startDate: Date, endDate: Date) {}
function baseAmountReceived(startDate: Date, endDate: Date) {}
function baseAmountOverdue(startDate: Date, endDate: Date) {}

function refacAmountInvoiced(dateRange: DateRange) {}
function refacAmountReceived(dateRange: DateRange) {}
function refacAmountOverdue(dateRange: DateRange) {}
