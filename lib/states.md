// Loading and Error States Integration
//
// This project includes reusable Loading and ErrorMessage components
// along with a useAsyncState hook for managing async operations.
//
// Usage:
//
// 1. Import the hook and components:
//    import { useAsyncState } from "@/lib/hooks";
//    import { Loading, ErrorMessage } from "@/components/ui";
//
// 2. Use the hook in your component:
//    const { data, loading, error, startLoading, setData, setError } = useAsyncState();
//
// 3. Handle states in your render:
//    if (loading) return <Loading message="Loading..." />;
//    if (error) return <ErrorMessage message={error} onRetry={retryFunction} />;
//    return <YourContent data={data} />;
//
// 4. Trigger state changes:
//    startLoading(); // Show loading spinner
//    setData(result); // Set successful data
//    setError("Error message"); // Show error state
//
// Example implementation in app/config/income/page.tsx