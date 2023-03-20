import { Octokit } from 'octokit'

const octokit = new Octokit({})

export async function getPosts(tree_sha = 'master') {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: 'nxgh',
    repo: 'notes',
    tree_sha,
    mediaType: {
      format: 'raw',
    },
    headers: {},
  })
  const response = data.tree.reduce((resp, item) => {
    if (item.path!.endsWith('.md') || item.path!.endsWith('.mdx')) {
      resp.push({
        title: item.path!.replace('.md', '').replace('.mdx', ''),
        path: item.path!,
      })
    }
    return resp
  }, [] as { title: string; path: string }[])

  return response
}
export async function getPost(path: string) {
  const { data } = await octokit.rest.repos.getContent({
    mediaType: {
      format: 'raw',
    },
    owner: 'nxgh',
    repo: 'notes',
    path,
  })
  return data
}
