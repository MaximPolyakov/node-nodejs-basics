export const parseEnv = () => {
    Object.entries(process.env)
    .forEach(([key, value]) => {
        if (key.includes('RSS_')) console.log(`${key}=${value}`);
    });
}; 
    

parseEnv();