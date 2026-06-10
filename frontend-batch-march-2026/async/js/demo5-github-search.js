const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");

function setState(state, message = "") {
    const states = {
        loading: `<p class = "loading">Loading....</p>`,
        error: `<p class = "error">Error ... ${message}</p>`,
        empty: `<p class = "muted">Search for a GitHub user above</p>`
    };
    result.innerHTML = states[state] || "";
}

async function searchUser(username) {
    if (!username.trim()) return;
    setState("loading");
    btn.disabled = true;

    try {
        //error prone code write here ---> success
        const apiCallResult = await fetch(`https://api.github.com/users/${username}`);

        if (apiCallResult.status === 404) {
            throw new Error(`User ${username} not found`);
        }

        if (!apiCallResult.ok) {
            throw new Error(`API error: ${apiCallResult.status}`);
        }

        const user = await apiCallResult.json(); // Ok 200

        result.innerHTML = `
            
              <div class="user-card">
                <img src="${user.avatar_url}" alt="user profile" width="180">
                    <div class=""user-info>
                            <h2>${user.name} || ${user.login}</h2>
                            <a href="${user.html_url}" target="_blank">View On Github</a>
                    </div>
              </div>
               
        `;
    }
    catch (error) {
        //if any error control will come here  --> fail
        setState("error", error.message);

    }
    finally {
        //it will always run
        btn.disabled = false;
    }
}

//event and eventlistener
btn.addEventListener("click", () => {
    searchUser(input.value);
});

//function call
setState("empty");