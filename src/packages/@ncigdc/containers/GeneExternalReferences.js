// @flow

import React from "react";
import Relay from "react-relay/classic";
import { compose, withProps } from "recompose";
import { omit } from "lodash";

import EntityPageVerticalTable
  from "@ncigdc/components/EntityPageVerticalTable";
import externalReferenceLinks from "@ncigdc/utils/externalReferenceLinks";
import { ExternalLink } from "@ncigdc/uikit/Links";
import BookIcon from "@ncigdc/theme/icons/Book";

type TProps = {
  node: Object,
  externalLinks: Object
};

const enhance = compose(
  withProps(({ node }) => ({
    externalLinks: {
      ...omit(node.external_db_ids, "__dataID__"),
      ensembl: [node.gene_id]
    }
  }))
);

const GeneExternalReferencesComponent = ({ externalLinks }: TProps = {}) => (
  <EntityPageVerticalTable
    title={
      <span>
        <BookIcon style={{ marginRight: "1rem" }} /> External References
      </span>
    }
    thToTd={Object.keys(externalLinks).map(db => ({
      th: db.replace(/_/g, " "),
      td: externalLinks[db].length
        ? <ExternalLink href={externalReferenceLinks[db](externalLinks[db][0])}>
            {externalLinks[db]}
          </ExternalLink>
        : "--"
    }))}
    style={{ flex: 1 }}
  />
);

export const GeneExternalReferencesQuery = {
  fragments: {
    node: () => Relay.QL`
      fragment on Gene {
        gene_id
        external_db_ids {
          entrez_gene
          uniprotkb_swissprot
          hgnc
          omim_gene
        }
      }
    `
  }
};

const GeneExternalReferences = Relay.createContainer(
  enhance(GeneExternalReferencesComponent),
  GeneExternalReferencesQuery
);

export default GeneExternalReferences;