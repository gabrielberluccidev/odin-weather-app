export function validateResult(result) {
  if (result.endsWith('400')) {
    return 'Invalid city';
  }

  if (result.endsWith('404')) {
    return 'An error ocurred while requesting the data. Please try again later.';
  }

  if (result.endsWith('401')) {
    return 'API key invalid.';
  }

  if (result.endsWith('429')) {
    return 'Too many requests. Please try again later.';
  }

  if (result.endsWith('500')) {
    return 'Internal server error.';
  }
}
