let toolsData = null;

function loadTools() {
    if (!window.TOOLS_DATA) {
        throw new Error('tools-data.js 未加载');
    }
    toolsData = window.TOOLS_DATA;
    return toolsData;
}

function getToolSections() {
    return toolsData.sections.filter((s) => s.type === 'tools');
}

function getAllToolUrls() {
    return getToolSections().flatMap((s) => s.tools.map((t) => t.url));
}

function isImageIcon(icon) {
    return /\.(svg|png|jpe?g|webp|gif)$/i.test(icon) || icon.startsWith('images/');
}

function renderIcon(icon, alt, className) {
    if (isImageIcon(icon)) {
        return `<img src="${icon}" alt="${alt}" class="${className}">`;
    }
    return icon;
}

function renderDevUrl(url) {
    return `<a href="${url}" class="dev-link" target="_blank" rel="noopener">${url}</a>`;
}

function renderToolCard(tool, index, sectionIndex) {
    const delay = (sectionIndex * 0.1 + index * 0.06).toFixed(2);
    return `
                    <a href="${tool.url}" class="tool-card store-enter" style="--enter-delay: ${delay}s" target="_blank" rel="noopener">
                        <div class="tool-icon tool-icon--squircle">
                            ${renderIcon(tool.icon, tool.abbr, 'tool-icon-img')}
                        </div>
                        <div class="tool-info">
                            <p class="tool-abbr">${tool.abbr}</p>
                            <p class="tool-name">${tool.name}</p>
                        </div>
                    </a>`;
}

function renderToolSection(section, sectionIndex) {
    const titleDelay = (sectionIndex * 0.1).toFixed(2);
    const cards = section.tools
        .map((tool, index) => renderToolCard(tool, index, sectionIndex))
        .join('');

    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title store-enter" style="--enter-delay: ${titleDelay}s">${section.title}</h2>
                <div class="store-panel">
                    <div class="tools-grid">
                        ${cards}
                    </div>
                </div>
            </div>
        </section>`;
}

function renderIndex(data) {
    const main = document.getElementById('main-content');
    main.innerHTML = data.sections
        .filter((section) => section.type === 'tools')
        .map((section, index) => renderToolSection(section, index))
        .join('');
}

function renderDevTable(section) {
    if (section.type !== 'tools') {
        return '';
    }

    return `
                <div class="dev-section">
                    <h3>${section.title}</h3>
                    <table class="dev-table">
                        <thead>
                            <tr>
                                <th>英文缩写</th>
                                <th>中文名称</th>
                                <th>访问地址</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${section.tools
                                .map(
                                    (tool) => `
                            <tr>
                                <td>${tool.abbr}</td>
                                <td class="dev-name-zh">${tool.name}</td>
                                <td>${renderDevUrl(tool.url)}</td>
                                <td><span class="status-${tool.status}">${tool.statusText}</span></td>
                            </tr>`
                                )
                                .join('')}
                        </tbody>
                    </table>
                </div>`;
}

function renderDev(data) {
    const container = document.getElementById('dev-content');
    container.innerHTML = data.sections.map(renderDevTable).join('');
}

function copyAllUrls() {
    navigator.clipboard
        .writeText(getAllToolUrls().join('\n'))
        .then(() => alert('所有链接已复制到剪贴板！'))
        .catch((err) => console.error('复制失败:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    try {
        const data = loadTools();
        if (page === 'index') renderIndex(data);
        else if (page === 'dev') renderDev(data);
    } catch (err) {
        console.error(err);
        const target = document.getElementById('main-content') || document.getElementById('dev-content');
        if (target) {
            target.innerHTML =
                '<p class="load-error">加载工具数据失败。请检查 <code>tools-data.js</code> 语法是否正确，并确认页面已引入该文件。</p>';
        }
    }
});
