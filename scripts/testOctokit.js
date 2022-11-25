const { Octokit } = require("octokit");
const auth = process.env.GITHUB_TOKEN;

const octokit = new Octokit({auth});
t().then(async () => {
    // const {data} = await octokit.request('GET /repos/tommy-anderson/gh-action-test/pulls/5/requested_reviewers')
    // console.log(data)
    const {data} = await octokit.request('GET /repos/Planable/planable-app/pulls')
    console.log(data.map((pr) => pr.head.ref))
});


async function t(){
    const {data} = await octokit.rest.users.getAuthenticated();
    return data
}