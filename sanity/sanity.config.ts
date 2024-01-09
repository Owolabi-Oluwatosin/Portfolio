import {defineConfig, isDev} from 'sanity/lib/exports'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [deskTool()]

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
