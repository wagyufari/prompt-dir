export type Prompt = {
  id: string;
  title: string;
  model: string;
  category: string;
  tags: string[];
  image: string;
  createdAt: string;
  prompt: string;
  negativePrompt: string;
};

export const prompts: Prompt[] = [
  {
    id: "premium-collectible-3d-icon",
    title: "3D Glossy Black",
    model: "Image generation",
    category: "3D Product Render",
    tags: ["3D icon", "black lacquer", "holographic chrome", "transparent"],
    image: "/3d-glossy-black.webp",
    createdAt: "2026-06-06",
    prompt:
      "Transform the provided 2D vector into a premium collectible 3D icon.\n\nCRITICAL: Preserve ONLY the vector's silhouette, proportions, negative space, and geometry. The source image is a SHAPE REFERENCE ONLY. Ignore all original colors, gradients, fills, textures, materials, lighting, and styling.\n\nFront surfaces must be rendered in deep piano-black lacquer, black obsidian glass, or ultra-gloss black enamel. They should appear nearly black, highly reflective, and luxurious. Never reproduce the source icon's original colors on the front surfaces.\n\nSidewalls, bevels, and extruded edges must use iridescent holographic chrome with dichroic reflections that naturally shift between violet, purple, indigo, cyan, electric blue, silver, and subtle gold. These colors must come only from reflections and material properties, never from the source artwork.\n\nStyle: ultra-premium futuristic product render, thick extrusion, substantial depth, smooth subdivision-surface modeling, large continuous bevels, soft organic transitions, luxury consumer electronics aesthetic, collectible desk object, premium software branding asset.\n\nGeometry: maintain the exact vector shape while adding significant thickness. Use perfectly rounded bevels, smooth curvature continuity, and precision-crafted surfaces. No visible extrusion artifacts, hard edges, or low-poly geometry.\n\nLighting: professional HDRI studio lighting, large softbox reflections, soft directional key light, gentle rim highlights, clean specular reflections, minimal shadows, floating product presentation.\n\nRendering: photorealistic Blender Octane/Cycles quality, luxury product visualization, extremely clean reflections, high dynamic range, subtle ambient occlusion, soft contact shadow, crisp anti-aliasing, premium CGI finish.\n\nBackground: transparent.\n\nAvoid: original colors, brand colors, color preservation, source gradients, colored front surfaces, flat icon, vector look, matte finish, cartoon, clay, low poly, rough metal, brushed metal, plastic toy, excessive glow, neon lighting, busy background, text, watermark, illustration, cheap chrome, oversaturated colors.",
    negativePrompt: ""
  },
  {
    id: "premium-software-branding-3d-object",
    title: "3D Glossy Colored",
    model: "Image generation",
    category: "3D Product Render",
    tags: ["3D icon", "premium materials", "studio render", "transparent"],
    image: "/3d-glossy-colored.webp",
    createdAt: "2026-06-06",
    prompt:
      "Transform the provided 2D vector icon into a premium collectible 3D object while preserving the exact silhouette, proportions, geometry, negative space, corner radii, and overall shape of the original vector.\n\nSTYLE\n\nUltra-premium software-branding icon rendered as a high-end physical object. Inspired by luxury consumer electronics, modern app icons, collectible desk sculptures, and precision industrial design. The result should feel like a product photographed in a professional studio rather than a flat graphic.\n\nGEOMETRY\n\nConvert the vector into a thick, deeply extruded 3D form with substantial volume and weight. Use smooth subdivision-surface modeling, perfectly rounded bevels, continuous curvature transitions, and precision-crafted edges. Every surface should feel intentionally sculpted and highly refined. No sharp mechanical extrusions, no low-poly geometry, and no visible modeling artifacts.\n\nMATERIALS\n\nFront-facing surfaces use premium glossy enamel, polished acrylic, colored glass, or lacquered resin. Materials should feel dense, smooth, and expensive with rich specular reflections and subtle depth.\n\nSidewalls and beveled edges use highly polished reflective materials with enhanced light interaction. Surfaces should exhibit luxurious reflections, subtle refractions, glossy highlights, and premium manufacturing quality.\n\nIf the source icon contains colors or gradients, preserve them faithfully on the primary front surfaces while enhancing them with realistic material properties and depth.\n\nSURFACE QUALITY\n\nMirror-smooth finish. No roughness, grain, scratches, fingerprints, dust, texture noise, fabric-like surfaces, or matte materials. Every surface should appear factory-finished and premium.\n\nLIGHTING\n\nProfessional HDRI studio lighting with large softboxes. Soft directional key light, subtle fill light, and clean rim lighting. Rich reflections should travel naturally across curved bevels and sidewalls. Lighting should emphasize depth, thickness, and material quality without creating harsh shadows.\n\nRENDERING\n\nPhotorealistic product visualization. Extremely high detail. Ray-traced reflections and global illumination. Crisp edge definition. High contrast between illuminated bevels and darker recessed areas. Luxury software-brand asset quality.\n\nCOMPOSITION\n\nCentered object. Slight three-quarter perspective. Floating presentation. Clean dark background with subtle gradients and atmospheric depth. Focus entirely on the icon. No text, labels, watermarks, UI elements, mockups, hands, or additional objects.\n\nOUTPUT GOAL\n\nThe final result should look like an expensive collectible 3D icon manufactured from premium materials, suitable for a flagship AI product, design tool, or modern technology brand.\n\nBACKGROUND\n\nTransparent",
    negativePrompt: ""
  },
  {
    id: "sony-a1-editorial-portrait-enhancement",
    title: "Photo Enhancement",
    model: "Image generation",
    category: "Portrait Enhancement",
    tags: ["portrait", "Sony A1", "identity-preserving", "editorial"],
    image: "/photo-enhancement.webp",
    createdAt: "2026-06-06",
    prompt:
      "Enhance the portrait while strictly preserving the subject's identity with accurate facial geometry. Do not change their expression or face shape. Only allow subtle feature cleanup without altering who they are. Keep the exact same background from the reference image. No replacements, no changes, no new objects, no layout shifts. The environment must look identical. The image must be recreated as if it was shot on a Sony A1, using an 85mm f1.4 lens, at f1.6, ISO 100, 1/200 shutter speed, cinematic shallow depth of field, perfect facial focus, and an editorial-neutral color profile. This Sony A1+ 85mm f1.4 setup is mandatory. The final image must clearly look like premium full-frame Sony A1 quality. Lighting must match the exact direction, angle, and mood of the reference photo. Upgrade the lighting into a cinematic, subject-focused style: soft directional light, warm highlights, cool shadows, deeper contrast, expanded dynamic range, micro-contrast boost, smooth gradations, and zero harsh shadows. Maintain neutral premium color tone, cinematic contrast curve, natural saturation, real skin texture (not plastic). No fake glow, no runway lighting, no over smoothing. Render in 4K resolution, 10-bit color, cinematic editorial style, premium clarity, portrait crop, and keep the original environmental vibe keep the original environmental vibe untouched. Re-render the subject with improved realism, depth, texture, and lighting while keeping identity and background fully preserved.\n\nNEGATIVE INSTRUCTIONS: No new background. No background change. No overly dramatic lighting. No face morphing. No fake glow. No flat lighting. No over-smooth skin.",
    negativePrompt: ""
  },
  {
    id: "color-preserved-premium-3d-vector-icon",
    title: "3D Glossy Colored 2",
    model: "Image generation",
    category: "3D Product Render",
    tags: ["3D icon", "color preservation", "transparent", "luxury render"],
    image: "/3d-glossy-colored-2.webp",
    createdAt: "2026-06-06",
    prompt:
      "Transform the provided 2D vector icon into a premium collectible 3D object while preserving the EXACT silhouette, proportions, geometry, negative space, and color palette of the original artwork.\n\nCRITICAL COLOR PRESERVATION\n\nThe source icon's colors are sacred. Preserve all original colors, gradients, hue transitions, saturation levels, and visual relationships exactly as provided. Do not recolor, reinterpret, replace, tint, monochromize, or shift the palette. Every visible front-facing surface must retain the original artwork's colors while gaining realistic material depth and lighting.\n\nSTYLE\n\nUltra-premium software-branding icon rendered as a high-end physical object. Luxury consumer electronics aesthetic. Collectible desk sculpture quality. The result should feel like a photographed product rather than a rendered logo.\n\nGEOMETRY\n\nConvert the vector into a thick, deeply extruded 3D form with substantial depth and weight. Large smooth bevels. Continuous curvature transitions. Precision-crafted edges. Clean subdivision-surface modeling. No low-poly geometry, no sharp mechanical extrusion, no visible artifacts.\n\nMATERIALS\n\nFront surfaces use premium glossy enamel, polished acrylic, colored glass, or luxury lacquer while maintaining the exact original colors and gradients. Rich specular reflections, subtle translucency, smooth light falloff, and premium material depth.\n\nSidewalls and beveled edges inherit and extend the original color palette naturally. Materials should feel dense, polished, and expensive with realistic reflections and soft refractions.\n\nSURFACE QUALITY\n\nMirror-smooth finish. Ultra-clean manufacturing quality. No scratches, dust, fingerprints, texture noise, grain, fabric texture, rough plastic, or matte surfaces.\n\nLIGHTING\n\nProfessional HDRI studio lighting. Large softbox reflections. Soft directional key light. Subtle fill light. Gentle rim highlights. Lighting should reveal the thickness, bevels, and material quality while preserving the icon's original colors.\n\nRENDERING\n\nPhotorealistic product visualization. Ray-traced reflections. Global illumination. Crisp edge definition. Premium software-brand marketing render quality. High detail and extremely clean presentation.\n\nCOMPOSITION\n\nFloating object. Slight three-quarter perspective. Centered composition. No pedestal. No shadows touching the frame. No text. No UI elements. No additional objects.\n\nBACKGROUND\n\nTransparent background (alpha channel). No backdrop, no gradients, no environment, no floor, no studio background. Object only.\n\nOUTPUT GOAL\n\nCreate a premium collectible 3D version of the supplied vector icon that preserves the original colors perfectly while adding substantial depth, luxury materials, realistic lighting, smooth bevels, and high-end product-render quality.",
    negativePrompt: ""
  },
  {
    id: "premium-clay-style-3d-icon",
    title: "3D Clay",
    model: "Image generation",
    category: "3D Product Render",
    tags: ["3D icon", "claymorphism", "color preservation", "transparent"],
    image: "/3d-clay.webp",
    createdAt: "2026-06-06",
    prompt:
      "Transform the provided 2D vector icon into a premium clay-style 3D object while preserving the EXACT silhouette, proportions, geometry, negative space, and original color palette of the source artwork.\n\nCRITICAL COLOR PRESERVATION\n\nPreserve all original colors, gradients, hue transitions, saturation levels, and color relationships exactly as provided. Do not recolor, reinterpret, tint, darken, or replace the source colors. The final 3D object must remain instantly recognizable as the original icon.\n\nSTYLE\n\nModern claymorphism 3D icon. Soft, playful, friendly, and highly polished. Inspired by premium mobile app illustrations, modern operating systems, onboarding graphics, and high-end product branding.\n\nGEOMETRY\n\nConvert the vector into a rounded clay sculpture with smooth organic forms and soft transitions. Every corner, edge, intersection, and silhouette should be generously rounded. No sharp edges, hard bevels, mechanical extrusion, or industrial surfaces.\n\nCreate subtle thickness and volume while maintaining the original icon shape. The object should feel molded from soft premium clay or silicone.\n\nMATERIALS\n\nSoft-touch clay material with a smooth matte-to-satin finish.\n\nSlight subsurface scattering.\nSoft diffuse reflections.\nGentle specular highlights.\nPremium silicone, polymer clay, or rubberized material appearance.\n\nAvoid metallic, glass, chrome, carbon fiber, glossy acrylic, or hard plastic materials.\n\nLIGHTING\n\nBright studio lighting with large softboxes.\n\nSoft global illumination.\nSmooth shadow transitions.\nClean highlights.\nNo harsh contrast.\nNo dramatic cinematic lighting.\n\nThe icon should feel cheerful, approachable, and premium.\n\nRENDERING\n\nUltra-clean 3D render.\nHigh-resolution.\nPerfect anti-aliasing.\nSmooth surface shading.\nNo visible polygons.\nNo texture noise.\nNo scratches.\nNo dust.\nNo manufacturing imperfections.\n\nCOMPOSITION\n\nCentered object.\nFloating presentation.\nSlight perspective view.\nEntire icon visible within frame.\n\nBACKGROUND\n\nTransparent background (alpha channel).\nNo backdrop.\nNo floor.\nNo shadow catcher.\nNo environmental elements.\nOutput PNG with transparency.\n\nOUTPUT GOAL\n\nCreate a premium clay-style 3D version of the supplied vector icon that preserves the original colors exactly while transforming it into a soft, rounded, modern collectible object suitable for contemporary UI, onboarding illustrations, app branding, and product marketing.",
    negativePrompt: ""
  }
];
