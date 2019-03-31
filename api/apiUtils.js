export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
      // Server-side validation error occurred.
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }
  //In real world some error logging service will be called but for now I`m just logging the error in console
  export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }
  