export async function load({params}){

    const post = await import(`../${params.slug}.md`)
    const {title, date} = post.metadata

    return {
        title,
        date
    }

}