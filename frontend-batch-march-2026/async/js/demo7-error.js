function divide(a, b) {
    if (b == 0) {
        throw new Error("Denominator is zero.");
    }
    return a / b;
}
//console.log(divide(10, 0));
class ValidationError extends Error {

    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

//throw new ValidationError("error due to field", "username");

const data = `{
"login": "javabysandeep",
"id": 42215856,
"node_id": "MDQ6VXNlcjQyMjE1ODU2",
"avatar_url": "https://avatars.githubusercontent.com/u/42215856?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/javabysandeep",
"html_url": "https://github.com/javabysandeep",
"followers_url": "https://api.github.com/users/javabysandeep/followers",
"following_url": "https://api.github.com/users/javabysandeep/following{/other_user}",
"gists_url": "https://api.github.com/users/javabysandeep/gists{/gist_id}",
"starred_url": "https://api.github.com/users/javabysandeep/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/javabysandeep/subscriptions",
"organizations_url": "https://api.github.com/users/javabysandeep/orgs",
"repos_url": "https://api.github.com/users/javabysandeep/repos",
"events_url": "https://api.github.com/users/javabysandeep/events{/privacy}",
"received_events_url": "https://api.github.com/users/javabysandeep/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "JavaBySandeep",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 31,
"public_gists": 0,
"followers": 70,
"following": 0,
"created_at": "2018-08-08T16:31:25Z",
"updated_at": "2026-02-24T09:54:58Z"
}`;
const user = JSON.parse(data);
console.log(`follower count= ${user.followers}`);

const student = {
    id: 101,
    name: "Shubham",
    address: "Pune",
    isActive: false
};
const studentString = JSON.stringify(student);
console.log(studentString);

localStorage.setItem("student",studentString);

console.log(`local storage ${localStorage.getItem("student")}`);

//localStorage.clear();

sessionStorage.setItem("user",studentString);