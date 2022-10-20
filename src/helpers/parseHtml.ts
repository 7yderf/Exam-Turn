export default function parseHTML(html:string): DocumentFragment {
    const t = document.createElement("template");
    t.innerHTML = html;
    return t.content;
}