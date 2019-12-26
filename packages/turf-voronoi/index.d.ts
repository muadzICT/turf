import { FeatureCollection, BBox, Point, Polygon } from '@turf/helpers';

/**
 * http://turfjs.org/docs/#voronoi
 */
export default function voronoi(
    points: FeatureCollection<Point>,
    options?: any
): FeatureCollection<Polygon>;
