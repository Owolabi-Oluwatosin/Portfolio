import {defineConfig, isDev} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [deskTool(), visionTool()]

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: 'q5dx793t',
  dataset: 'production',
  plugins: [...(isDev ? devOnlyPlugins : [])],
  schema: {
    types: schemaTypes,
  },
})
