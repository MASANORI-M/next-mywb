import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "https://django-myweb.herokuapp.com/";

// Post一覧の取得
export async function getAllPostsData() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts;
}

// Post一覧idを取得
export async function getAllPostsIds() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    })
}

// Post詳細を取得
export async function getPostData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
    const post = await res.json();
    return post;
}