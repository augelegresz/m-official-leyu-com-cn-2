// assets/content-map.js
// Content map for site sections, tags, and search filtering

const contentMap = {
  siteUrl: "https://m-official-leyu.com.cn",
  primaryKeyword: "乐鱼体育",
  sections: [
    {
      id: 1,
      name: "首页",
      slug: "home",
      tags: ["首页", "推荐", "乐鱼体育"],
      description: "站点首页推荐内容"
    },
    {
      id: 2,
      name: "体育赛事",
      slug: "sports",
      tags: ["体育", "赛事", "乐鱼体育", "直播"],
      description: "体育赛事直播与回放"
    },
    {
      id: 3,
      name: "电子竞技",
      slug: "esports",
      tags: ["电竞", "比赛", "乐鱼体育", "战队"],
      description: "电子竞技相关资讯"
    },
    {
      id: 4,
      name: "娱乐天地",
      slug: "entertainment",
      tags: ["娱乐", "游戏", "乐鱼体育", "活动"],
      description: "娱乐互动内容"
    },
    {
      id: 5,
      name: "新闻资讯",
      slug: "news",
      tags: ["新闻", "资讯", "乐鱼体育", "报道"],
      description: "最新新闻动态"
    },
    {
      id: 6,
      name: "帮助中心",
      slug: "help",
      tags: ["帮助", "客服", "乐鱼体育", "支持"],
      description: "用户帮助与支持"
    }
  ],
  customTags: [
    "乐鱼体育",
    "体育",
    "电竞",
    "娱乐",
    "新闻",
    "推荐",
    "热门",
    "新上线"
  ]
};

// Search filter function: returns sections matching a query string
function searchSections(query) {
  if (!query || query.trim() === "") {
    return contentMap.sections;
  }

  const lowerQuery = query.toLowerCase().trim();

  return contentMap.sections.filter(section => {
    // Check section name, slug, description, and tags
    const nameMatch = section.name.toLowerCase().includes(lowerQuery);
    const slugMatch = section.slug.toLowerCase().includes(lowerQuery);
    const descMatch = section.description.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

    return nameMatch || slugMatch || descMatch || tagMatch;
  });
}

// Get all unique tags from all sections
function getAllTags() {
  const tagSet = new Set();
  contentMap.sections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  contentMap.customTags.forEach(tag => tagSet.add(tag));
  return Array.from(tagSet);
}

// Find sections that contain a specific tag
function findSectionsByTag(tag) {
  if (!tag) return [];
  const lowerTag = tag.toLowerCase();
  return contentMap.sections.filter(section =>
    section.tags.some(t => t.toLowerCase() === lowerTag)
  );
}

// Get section by its id
function getSectionById(id) {
  return contentMap.sections.find(section => section.id === id) || null;
}

// Get section by its slug
function getSectionBySlug(slug) {
  return contentMap.sections.find(section => section.slug === slug) || null;
}

// Example usage (can be removed in production)
console.log("Site URL:", contentMap.siteUrl);
console.log("Primary keyword:", contentMap.primaryKeyword);
console.log("All sections:", contentMap.sections.length);
console.log("Search results for '乐鱼体育':", searchSections("乐鱼体育").length);

// Export for Node.js (optional, works in browser as plain script)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    contentMap,
    searchSections,
    getAllTags,
    findSectionsByTag,
    getSectionById,
    getSectionBySlug
  };
}