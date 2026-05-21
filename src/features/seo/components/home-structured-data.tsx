import {
  buildWebSiteJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildBreadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/features/seo';

export function HomeStructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const siteTitle = process.env.NEXT_PUBLIC_TITLE;

  return (
    <>
      <script
        {...jsonLdScriptProps(
          buildWebSiteJsonLd({
            ...(siteUrl && {
              searchUrlTemplate: `${siteUrl}/?s={search_term_string}`,
            }),
          }),
        )}
      />
      <script {...jsonLdScriptProps(buildOrganizationJsonLd())} />
      <script
        {...jsonLdScriptProps(
          buildWebPageJsonLd({
            type: 'WebPage',
            name: siteTitle,
            headline: siteTitle,
            slug: 'home',
          }),
        )}
      />
      <script {...jsonLdScriptProps(buildBreadcrumbJsonLd([{ name: 'Home', url: '/' }]))} />
    </>
  );
}
