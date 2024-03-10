// Page.tsx (Server Component)
import InteractivePart from './InteractivePart'; // Adjust the import path as necessary

function Page() {
    return (
        <>
            {/* Server-rendered components can go here */}
            <InteractivePart /> {/* This will be client-side interactive */}
        </>
    );
}

export default Page;
