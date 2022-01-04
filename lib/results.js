import fetch from "node-fetch";

const SERVERURL = "https://django-myweb.herokuapp.com/";

export async function getAllResultsData() {
    const res = await fetch(new URL(`${SERVERURL}api/result/`));
    const results = await res.json();
    return results;
}

export async function getAllResultsIds() {
    const res = await fetch(new URL(`${SERVERURL}api/result/`));
    const results = await res.json();
    return results.map((result) => {
        return {
            params: {
                id: String(result.id),
            },
        };
    })
}

export async function getResultData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/result/${id}/`));
    const result = await res.json();
    return result;
}