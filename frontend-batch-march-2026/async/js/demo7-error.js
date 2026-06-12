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

localStorage.setItem("student", studentString);

console.log(`local storage ${localStorage.getItem("student")}`);

//localStorage.clear();

sessionStorage.setItem("user", studentString);


function makeCounter(start = 0) {
    let count = start; // count cannot be accessed outside the function
    return {
        increment() { count++; },
        decrement() { count--; },
        reset() { count = start; },
        value() { return count; }
    };
}
const enrollCounter = makeCounter(0);
enrollCounter.increment();
enrollCounter.increment();
console.log(enrollCounter.value());


// curry : a function that returns another function
const multiply = (a) => (b) => a * b;
const double = multiply(2);  // (b) => 2 * b
console.log(`double which got function = ${double}`);
console.log(`double = ${double(5)}`); // (b) => 2 * b ===> 10

const triple = multiply(3); //(b) => 3 * b
console.log(`tripple = ${triple(5)}`); // /(b) => 3 * 5 => 15


//memoization -- function result is stored in cache


//expensive calculation
function calculateBatchStats(scores) {
    console.log("computing the stats.....(slow)");
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { avg, max: Math.max(...scores), min: Math.min(...scores) };
}

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Cache hit for", key);
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;

    };
}

const memoStats = memoize(calculateBatchStats);

memoStats([88,92,74]); // function call
memoStats([88,92,74]); // no function call
memoStats([88,70]); // function call